import { Injectable } from '@nestjs/common';
import { User } from 'src/common/entities/user.entity';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { WholesaleRequestDto } from './dto/wholesale-request-create.dto';

@Injectable()
export class WholesaleRequestService {
    constructor(private prisma:PrismaService){}
    
    async create(user:User,wholesaleRequestDto:WholesaleRequestDto){
        await this.prisma.wholesaleRequest.create({
            data:{
                ...wholesaleRequestDto,
                user:{
                    connect:{
                        id: user.id
                    }
                }
            }
        })
    }
}
