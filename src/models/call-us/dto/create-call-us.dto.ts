import { ApiProperty } from '@nestjs/swagger';
import {  IsString } from 'class-validator';

export class CreateCallUsDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsString()
  message: string;
}
