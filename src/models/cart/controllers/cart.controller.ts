import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from '../dto/create-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { CartStatus } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@ReqUser() user: User, @Body() createCartDto: CreateCartDto) {
    return  await this.cartService.create(user, createCartDto);
  }

  @Get('/:status')
  async findAll(@ReqUser() user: User, @Param('status') status: CartStatus) {
    return await this.cartService.findAllMyCart(user, status);
  }

  @Get(':id')
  async findOne(@ReqUser() user:User, @Param('id') id: string) {
    return await this.cartService.findOne(user,+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
  //   return this.cartService.update(+id, updateCartDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cartService.remove(+id);
  // }
}
