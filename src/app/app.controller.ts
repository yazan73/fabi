import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

@ApiTags('app')
// @ApiBearerAuth()
@AllowUnAuthorizedRequest()

@Controller('system')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('delete')
  async getDelete(){
    await this.prisma.productDetails.deleteMany({})
    await this.prisma.product.deleteMany({})
    await this.prisma.brand.deleteMany({})
    await this.prisma.productCategory.deleteMany({})
    await this.prisma.media.deleteMany({})
    await this.prisma.emailCredential.deleteMany({})
    await this.prisma.user.deleteMany({})
  }
}
