import { ExceptionEnum } from './exception.enm';
import { ORMException } from './orm-exception.base.exception';

export class ObjectNotFoundException extends ORMException {
  message = 'Object Not Found';
  code = ExceptionEnum.NOT_FOUND;
}
