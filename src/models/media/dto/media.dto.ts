import { ApiProperty } from '@nestjs/swagger';
import { MediaType } from '@prisma/client';

export class MediaEntity {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String })
  title: string | null;

  @ApiProperty({ type: Number })
  size: number | null;

  @ApiProperty({ enum: MediaType, default: 'IMAGE' })
  type: MediaType | null;

  constructor(image) {
    this.id = image.id;
    this.url = image.url;
    this.type = image.type;
    this.title = image.title;
    this.size = image.size;
  }
}
