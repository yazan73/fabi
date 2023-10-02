import { Injectable } from '@nestjs/common';

import { ForeignKeyConstraintFailedException } from '../exceptions/foreign-key-constraint-faild.exception';
import { ObjectNotFoundException } from '../exceptions/object-not-found.exception';
import { ORMException } from '../exceptions/orm-exception.base.exception';
import { UniqueConstraintValidationException } from '../exceptions/unique-constraint-validation.exception';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaErrorHandlerService {
  private _errorFactory: Record<
    string,
    (e: PrismaClientKnownRequestError) => ORMException
  > = {
    P2002: this._P2002,
    P2003: this._P2003,
    P2018: this._P2018,
    P2025: this._P2025,
  };

  canMap(error: PrismaClientKnownRequestError): boolean {
    return this._errorFactory[error.code] !== undefined;
  }

  map(error: PrismaClientKnownRequestError) {
    return this.canMap(error)
      ? this._errorFactory[error.code](error)
      : this.ormException(error);
  }

  private ormException(error: PrismaClientKnownRequestError) {
    return new ORMException({
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
  }

  // The required connected records were not found. {details}
  private _P2018(error: PrismaClientKnownRequestError) {
    const meta = error.meta;
    return new ObjectNotFoundException({ meta });
  }

  // Unique constraint failed on the {constraint}
  private _P2002(error: PrismaClientKnownRequestError) {
    const meta = error.meta;
    const target = (error.meta as any)?.target;
    return new UniqueConstraintValidationException(target ?? '', { meta });
  }

  // Foreign key constraint failed on the field: {field_name}
  private _P2003(error: PrismaClientKnownRequestError) {
    const meta = error.meta;
    const target = (error.meta as any)?.target;
    return new ForeignKeyConstraintFailedException(target, { meta });
  }

  // Record to delete does not exist
  private _P2025(error: PrismaClientKnownRequestError) {
    const meta = error.meta;
    const target = (error.meta as any)?.target;
    return new ForeignKeyConstraintFailedException(target, { meta });
  }
}
