import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateHomeSliderDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  subTitle?: string | null;

  @ApiProperty({ type: String })
  @IsString()
  buttonContent: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  mediaId: number;
}
