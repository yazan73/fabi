import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CallUs {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsString()
  message: string;


  constructor(callUs){
    this.name = callUs.name;
    this.phoneNumber = callUs.phoneNumber
    this.message = callUs.message
  }
}
