import { BadRequestException } from '@nestjs/common';
import { extname } from 'path';

export const mediaFileFilter = (req, file: Express.Multer.File, callback) => {
  if (!file.mimetype.match(/(image|video|pdf)/))
    return callback(
      new BadRequestException('Only Images ,videos and PDF are allowed'),
      false,
    );
  callback(null, true);
};

export const imageFileFilter = (req, file: Express.Multer.File, callback) => {
  if (!file.mimetype.match(/(image)/))
    return callback(new BadRequestException('Only Images are allowed'), false);
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  const randomName = Date.now();
  callback(null, `${randomName}${fileExtName}`);
};
