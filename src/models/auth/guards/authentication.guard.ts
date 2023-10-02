import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtValidatorService } from './jwt-validator.service';


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
      if (allowUnauthorizedRequest) return true;

      return true;
      const request = context.switchToHttp().getRequest<Request>();

      let token = request.headers.authorization;

      if (!token) throw new UnauthorizedException();

      token = token.replace('Bearer', '').trim();

      const payload = this.jwtService.verify(token);

      const user = await this.jwtValidatorService.validate(payload);

      if (!user ) throw new UnauthorizedException();

      request['user'] = user;

      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
