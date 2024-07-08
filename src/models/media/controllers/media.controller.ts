import {
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MediaEntity } from '../dto/media.dto';
import { MediaService } from './media.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { UserNotRequired } from 'src/models/auth/decorators/getUser.needless.decorator';

// @ApiBearerAuth()
@AllowUnAuthorizedRequest()

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiOkResponse({ type: MediaEntity })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        // .addFileTypeValidator({
        //   fileType: /[\/.](jpeg|png|pdf)$/i,
        // })
        // .addMaxSizeValidator({
        //   maxSize: 1000 * 1000 * 5,
        // })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @UserNotRequired() user:User
  ) {
    const image = await this.mediaService.uploadImage(file,user);

    return new MediaEntity(image);
  }

  // @Post('admin')
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       file: {
  //         type: 'string',
  //         format: 'binary',
  //       },
  //     },
  //   },
  // })
  // @ApiOkResponse({ type: MediaEntity })
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFileAdmin(
  //   @UploadedFile(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({
  //         fileType: /[\/.](jpeg|png|pdf)$/i,
  //       })
  //       .addMaxSizeValidator({
  //         maxSize: 1000 * 1000 * 5,
  //       })
  //       .build({
  //         errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  //       }),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   const image = await this.mediaService.uploadImage(file);

  //   return await myPromisify(new MediaEntity(image));
  // }
}
