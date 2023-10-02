import { ExceptionEnum } from './exception.enm';

export class ORMException extends Error {
  message = 'Some thing went wrong in the ORM operation';
  code?: keyof typeof ExceptionEnum | string;
  meta: object = {};
  constructor(params?: { code?: string; message?: string; meta?: object }) {
    super();
    if (params) {
      this.message = params.message ?? this.message;
      this.meta = params.meta ?? {};
      this.code = params.code;
    }
  }
}
