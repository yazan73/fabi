import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { AddReviewDto } from './dto/add-review.dto';
import { User } from 'src/common/entities/user.entity';

@Injectable()
export class ProductReviewService {

    constructor(private prisma:PrismaService){}
  
  async addReview(user: User,addReview: AddReviewDto) {
    await this.prisma.reviewProduct.create({
      data:{
        rate: addReview.rate,
        description: addReview.description,
        ownerId:user.id,
        productId: addReview.productId
      }
    })

  }
}
