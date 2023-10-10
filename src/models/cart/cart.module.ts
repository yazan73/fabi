import { Module } from '@nestjs/common';
import { CartController } from './controllers/cart.controller';
import { CartService } from './controllers/cart.service';
import { GenerateUniqueNumberService } from './service/generateUniqueNumber.service';

@Module({
  controllers: [CartController],
  providers: [CartService,GenerateUniqueNumberService]
})
export class CartModule {}
