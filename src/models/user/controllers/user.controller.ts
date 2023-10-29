import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserProfile } from '../dto/profile.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from '../dto/user.update.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { CreateAddress } from '../dto/adddres-create.dto';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

// @ApiBearerAuth()
@AllowUnAuthorizedRequest()

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 200,
    description: 'user profile',
    type: UserProfile,
  })
  @Get('profile')
  userProfile(@ReqUser('user') user: User) {
    return this.userService
      .profile(user.id)
      .then((user) => {
        return user;
      })
      .catch((e) => {
        console.log(e);
        
        throw new BadRequestException("Can't get the profile now!!");
      });
  }

  @ApiResponse({
    status: 200,
    description: 'user update',
    type: UserProfile,
  })
  @Put('')
  updateUser(@ReqUser()user:User,@Body() updateUserDto:UpdateUserDto) {
    return this.userService
      .update({userId:user.id,updateUserDto})
      .then((user) => {
        return user;
      })
      .catch((error) => {
        console.log(error);
        
        throw new BadRequestException("Can't update the profile now!!");
      });
  }

  @Get('addresses')
  async addresses(@ReqUser() user:User){
    return await this.userService.getAddress(user.id)
  }

  @Post('address')
  async address(@Body() createAddress:CreateAddress, @ReqUser() user:User){
    return await this.userService.createAddress({userId:user.id,createAddress})
  }
}
