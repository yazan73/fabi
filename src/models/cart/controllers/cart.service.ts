import { Injectable } from '@nestjs/common';
import { CreateCartDto } from '../dto/create-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { User } from 'src/common/entities/user.entity';
import { GenerateUniqueNumberService } from '../service/generateUniqueNumber.service';
import { GenerateNumberType } from '../entities/GenerateNumberType.entity';
import { CartStatus } from '@prisma/client';
import { cartSelectValidator } from '../validators/myCart.select.validator';

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private generateUniqueNumberService: GenerateUniqueNumberService,
  ) {}

  async create(user: User, createCartDto: CreateCartDto) {
    await this.prisma.cart.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        number: this.generateUniqueNumberService.generate({
          type: GenerateNumberType.CART,
        }),
        productCarts: {
          createMany: {
            data: createCartDto.products,
          },
        },
        status: CartStatus.INPROGRESS,
      },
    });
  }

  async findAllMyCart(user: User, status: CartStatus) {
    return await this.prisma.cart.findMany({
      where: {
        AND: [{ userId: user.id }, { status: status }],
      },
      select: cartSelectValidator(),
    });
  }

  async findOne(user:User, id: number) {
    return await this.prisma.cart.findFirst({
      where:{
        id: id
      },
      select: cartSelectValidator()
    })
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
