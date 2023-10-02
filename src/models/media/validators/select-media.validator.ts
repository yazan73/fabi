import { Prisma } from '@prisma/client';

export const selectMediaValidator = () =>
  Prisma.validator<Prisma.MediaSelect>()({
    id: true,
    url: true,
    size: true,
    type: true,
  });
