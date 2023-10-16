import {
  ExecutionContext,
  Injectable,
  Logger,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtValidatorService } from './jwt-validator.service';
import { User } from '@prisma/client';


// NEED REFACTORING

export const ALLOW_UNAUTHORIZED_REQUEST = 'ALLOW_UNAUTHORIZED_REQUEST';

export const AllowUnAuthorizedRequest = () =>
  SetMetadata(ALLOW_UNAUTHORIZED_REQUEST, true);

@Injectable()
export class JwtAuthGuard {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly jwtValidatorService: JwtValidatorService,
  ) {}

  async canActivate(context: ExecutionContext) {
    try {
      const allowUnauthorizedRequest =
        this.reflector.getAllAndOverride<boolean>(ALLOW_UNAUTHORIZED_REQUEST, [
          context.getHandler(),
          context.getClass(),
        ]);
      const request = context.switchToHttp().getRequest<Request>();
      let token = request.headers.authorization;
      let user: User;

      if (token) {
        token = token.replace('Bearer', '').trim();
        const payload = this.jwtService.verify(token);
        user = await this.jwtValidatorService.validate(payload);
        request['user'] = user;
      }

      if (allowUnauthorizedRequest) return true;
      if (!token) throw new UnauthorizedException();
      if (!user) throw new UnauthorizedException();
      
      return user;

    } catch (error) {
      Logger.log(error);
      throw new UnauthorizedException();
    }
  }
}
