import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MediaType } from '@prisma/client';
import * as sharp from 'sharp';
import { User } from 'src/common/entities/user.entity';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { URL } from 'url';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  constructUrlForFile(fileName: string) {
    let configService = new ConfigService()
    const origin = `${configService.get('PROTOCOL')}://${configService.get('IP_ADDRESS')}`;
    const url = new URL(origin);
    url.port = configService.get('PORT');
    url.pathname = `${configService.get('MEDIA_FOLDER')}/${fileName}`;
    return url.toString();
  }

  async uploadImage(file: Express.Multer.File,user:User) {
    let imageProp;
    if (file.mimetype.match(/(image|video)/))
      imageProp = await sharp(file.path).metadata();

    const url = this.constructUrlForFile(file.filename);
    return await this.prisma.media.create({
      data: {
        url:url,
        size:file.size,
        type: MediaType.IMAGE,
        user:{
          connect:{
            id:user.id
          }
        }
      },
    });
  }

}
