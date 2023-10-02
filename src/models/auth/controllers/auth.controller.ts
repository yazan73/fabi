import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { UserWithToken } from '../dto/userWithToken.dto';
import { UserRegister } from '../dto/UserRegister.dto';
import { AllowUnAuthorizedRequest } from '../guards/authentication.guard';


@AllowUnAuthorizedRequest()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 201,
    description: 'user and token',
    type: UserWithToken
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
      .then((userWithToken:UserWithToken)=>{
        return userWithToken
    })
  }
  
  @ApiResponse({
    status: 201,
    description: 'user and token',
    type: UserWithToken
  })
  @ApiResponse({
    status: 404,
    description: 'Bad Request',
  })
  @Post('register')
  register(@Body() user: UserRegister) {
    return this.authService.register(user)
      .then((userWithToken:UserWithToken)=>{
        return userWithToken
    })
  } 
}
