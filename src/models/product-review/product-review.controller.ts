import { Body, Controller, Post } from '@nestjs/common';
import { ProductReviewService } from './product-review.service';
import { ReqUser } from '../auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { AddReviewDto } from './dto/add-review.dto';

@Controller('product-review')
export class ProductReviewController {
  constructor(private readonly productReviewService: ProductReviewService) {}

  @Post('')
  async addReview(@ReqUser() user:User, @Body() addReview:AddReviewDto){
    await this.productReviewService.addReview(user,addReview)
  }
}
