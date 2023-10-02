import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './controllers/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PasswordService } from './services/password.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/authentication.guard';
import { JwtValidatorService } from './guards/jwt-validator.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'fabasdi-v1',
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PasswordService,
    JwtValidatorService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
