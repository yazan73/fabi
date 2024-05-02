import { Module } from '@nestjs/common';
import { ProductReviewService } from './product-review.service';
import { ProductReviewController } from './product-review.controller';
import { AddReviewDto } from './dto/add-review.dto';
import { User } from 'src/common/entities/user.entity';
import { PrismaService } from 'src/common/prisma/services/prisma.service';

@Module({
  controllers: [ProductReviewController],
  providers: [ProductReviewService]
})
export class ProductReviewModule {}
