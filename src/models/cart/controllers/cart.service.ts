import { Injectable } from '@nestjs/common';
import { CreateCartDto } from '../dto/create-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { User } from 'src/common/entities/user.entity';
import { GenerateUniqueNumberService } from '../service/generateUniqueNumber.service';
import { GenerateNumberType } from '../entities/GenerateNumberType.entity';
import { CartStatus } from '@prisma/client';
import { allCartSelectValidator, cartSelectValidator } from '../validators/myCart.select.validator';
import { NotFoundError } from 'rxjs';

export const DEFAULT_DELIVERY_COST = 15000

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private generateUniqueNumberService: GenerateUniqueNumberService,
  ) {}

  calculateTotalPrice(createCartDto: CreateCartDto) {
    return createCartDto.products.reduce((current,product)=>current + product.price,0)
  }

  async create(user: User, createCartDto: CreateCartDto) {
    const address = await this.prisma.address.findFirst({where:{id: createCartDto.addressId}})
    if (!address) throw new NotFoundError('')

    return await this.prisma.cart.create({
        data: {
          totalPrice: this.calculateTotalPrice(createCartDto),
          address: {
            connect:{
              id: createCartDto.addressId
            }
          },
          user: {
            connect: { id: user.id },
          },
          number: this.generateUniqueNumberService.generate({
            type: GenerateNumberType.ORDER,
          }),
          productCarts: {
            createMany: {
              data: createCartDto.products,
            },
          },
          status: CartStatus.INPROGRESS,
          deliveryCost: address.deliveryCost || DEFAULT_DELIVERY_COST
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
        AND:[{id: id},{userId:user.id}] 
      },
      select: cartSelectValidator()
    })
  }

  async findCurrent(user:User) {
    return await this.prisma.cart.findFirst({
      where:{
        AND:[{status: CartStatus.INPROGRESS},{userId:user.id}] 
      },
      select: cartSelectValidator()
    })
  }

  async getAllCarts(user:User) {
    return await this.prisma.cart.findMany({
      where:{
        AND:[{userId:user.id}] 
      },
      
      select: allCartSelectValidator()
    })
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
