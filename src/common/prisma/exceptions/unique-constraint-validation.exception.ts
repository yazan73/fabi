import { ExceptionEnum } from './exception.enm';
import { ORMException } from './orm-exception.base.exception';

export class UniqueConstraintValidationException extends ORMException {
  message = 'The Field Should be unique';
  code = ExceptionEnum.UNIQUE_KEY_CONSTRAINT_FAILED;

  constructor(public fields: string[], ...args: any) {
    super(args);
  }
}
