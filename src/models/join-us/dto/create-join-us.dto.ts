import { ApiProperty } from '@nestjs/swagger';
import {  IsNumber, IsString } from 'class-validator';

export class CreateJoinUsDto {
  @ApiProperty({ type: String })
  @IsString()
  brandName: string;

  @ApiProperty({ type: String })
  @IsString()
  brandOwnerName: string;

  @ApiProperty({ type: String })
  @IsString()
  phone: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  branchNumber: number;

  @ApiProperty({ type: String })
  @IsString()
  address: string;
}
