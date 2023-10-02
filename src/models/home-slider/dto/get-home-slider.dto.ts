import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class HomeSlider {
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

  @ApiProperty({ type: String })
  @IsString()
  mediaUrl: string;


  constructor(slider){
    this.title = slider.title
    this.subTitle = slider.subTitle
    this.buttonContent = slider.buttonContent
    this.mediaUrl = slider.media.url
  }
}
