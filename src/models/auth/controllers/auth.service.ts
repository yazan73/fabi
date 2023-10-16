import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { UserWithToken } from '../dto/userWithToken.dto';
import { UserRegister } from '../dto/UserRegister.dto';
import { PrismaService } from '../../../common/prisma/services/prisma.service';
import { PasswordService } from '../services/password.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/common/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    public prisma: PrismaService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<UserWithToken> {
    return this.prisma.emailCredential
      .findFirst({
        where: {
          email: loginDto.email,
        },
        select: {
          user: true,
          email: true,
          password: true,
        },
      })
      .then((actor) => {
        if (!actor) throw new BadRequestException('Wrong email or password');
        return this.passwordService
          .verify(loginDto.password, actor.password ?? '')
          .then(async (isSamePassword) => {
            if (!isSamePassword) throw new UnauthorizedException();
            return new UserWithToken({
              user: new User(actor.user),
              token: await this.jwtService.signAsync({
                id: actor.user.id,
              },{secret:"fabasdi-v1"}),
            });
          });
      });
  }

  async register(user: UserRegister): Promise<UserWithToken> {
    return this.prisma.emailCredential
      .findFirst({
        where: {
          email: user.email,
        },
      })
      .then(async (emailCredential) => {
        if (emailCredential)
          throw new BadRequestException('email already exist!!');
        return this.prisma.user
          .create({
            data: {
              name: user.name,
              lastName: user.lastName,
              gender: user.gender,
              phone: user.phone,
              birthday: user.birthday,
              emailCredential: {
                create: {
                  email: user.email,
                  password: await this.passwordService.hash(user.password),
                },
              },
            },
          })
          .then(async () => {
            return await this.login({
              email: user.email,
              password: user.password,
            });
          });
      });
  }
}
