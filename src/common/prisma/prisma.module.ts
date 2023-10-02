import { Global, Module } from '@nestjs/common';

import { PrismaService } from './services/prisma.service';
import { PrismaErrorHandlerService } from './services/prisma-error-hanlder.service';

@Global()
@Module({
  providers: [
    PrismaService,
    PrismaErrorHandlerService,
  ],
  exports: [
    PrismaService,
    PrismaErrorHandlerService,
  ],
})
export class PrismaModule {}
