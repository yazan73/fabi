import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { currentOfferSelectValidator } from '../validators/currentOffer.select.validator';
import { currentOfferDto } from '../entities/currentOffer.entity';
import { CreateOfferDto } from '../dto/create-offer.dto';

@Injectable()
export class OfferService {
    constructor(private prisma:PrismaService){}

    async getCurrentOffers() {
        return this.prisma.offer.findMany({
            where:{
                expiryDate: { 
                    gt: new Date()
                }
            },
            select: currentOfferSelectValidator()
        }).then(offers => offers.map(offer=>new currentOfferDto(offer)))
    }
    async getAllOffers() {
        return await this.prisma.offer.findMany({
            include: {
                brand: true, // Include the associated brand
            },
        });

        // Map the result to your Offer model (if needed)
        // return offersWithBrands.map((offer) => ({
        //     ...offer,
        //     brand: {name:offer.brand}, // Map the brand object
        // }));
    }

    async deleteOffer(id:number){
        return this.prisma.offer.delete({
            where:{id}
        })
    }
    async getNewestOffer(){
        return this.prisma.offer.findMany({
            where:{
                expiryDate:{
                    gt:new Date()
                }
            },
            orderBy:{
                createdAt: 'asc'
            },
            select: currentOfferSelectValidator()
        }).then(offers=> offers.map(offer => new currentOfferDto(offer)))
    }
    async createOffer(offerDto:CreateOfferDto){
        await this.prisma.offer.create({
            data:offerDto
        })
    }
}
