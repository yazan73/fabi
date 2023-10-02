import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class PasswordService {
  private readonly salt = 10;

  async hash(value: string) {
    return await hash(value, this.salt);
  }

  async verify(plain: string, hashed: string) {
    return await compare(plain, hashed);
  }
}
