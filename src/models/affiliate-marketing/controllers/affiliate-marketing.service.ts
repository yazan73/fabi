import { Injectable } from '@nestjs/common';
import { User } from 'src/common/entities/user.entity';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { MarketingCodeDto } from '../dto/affiliateMarketingCode.dto';

@Injectable()
export class AffiliateMarketingService {

    constructor(private prisma:PrismaService){}

    async getOrGenerateCode(user: User): Promise<MarketingCodeDto> {
        const currentCode = await this.prisma.affiliateMarketing.findFirst({
            where:{
                userId: user.id
            }
        })

        if(currentCode){
            return {...currentCode, userBalance: 0}
        }

        let code = await this.prisma.affiliateMarketing.create({
            data:{
                code: this.generateNewCode(user),
                codeUsedCount: 0,
                user: {
                    connect:{
                        id: user.id
                    }
                },
            }
        })

        return {
            ...code,
            userBalance: 0
        }
    }
    generateNewCode(user: User) {
        const randomNumber = Math.floor(Math.random() * 10000);
        return `#${user.name}${randomNumber}`;
    }
}
