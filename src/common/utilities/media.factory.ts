import { diskStorage } from 'multer';
import { join } from 'path';
import { editFileName, mediaFileFilter } from './media.utils';
import { env } from 'process';

export const mediaFactory = () => {
  console.log(env.MEDIA_PATH,
    env.MEDIA_FOLDER,);
  
 return{  storage: diskStorage({
    destination: join(
      env.MEDIA_PATH,
      env.MEDIA_FOLDER,
    ),
    filename: editFileName,
  }),
  fileFilter: mediaFileFilter,
}
};
