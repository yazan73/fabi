import { ExceptionEnum } from './exception.enm';
import { ORMException } from './orm-exception.base.exception';

export class ForeignKeyConstraintFailedException extends ORMException {
  message = 'No such ID';
  code = ExceptionEnum.FOREIGN_KEY_CONSTRAINT_FAILED;

  constructor(public fields: string[], ...args: any) {
    super(args);
  }
}
