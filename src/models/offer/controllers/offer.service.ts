import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { currentOfferSelectValidator } from '../validators/currentOffer.select.validator';
import { currentOfferDto } from '../entities/currentOffer.entity';

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
}
