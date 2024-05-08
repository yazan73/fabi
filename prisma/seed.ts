import { PasswordService } from '../src/models/auth/services/password.service'
import { PrismaService } from '../src/common/prisma/services/prisma.service'
import { userSeeder } from './seeders/user.seeders'
import { productSeeder } from './seeders/product.seeders'
import { categorySeeder } from './seeders/category.seeders'
import { brandSeeder } from './seeders/brand.seeders'
import { mediaSeeder } from './seeders/media.seeders'
import { offerSeeder } from './seeders/offer.seeders'
const prisma = new PrismaService()
const passwordService = new PasswordService()
export async function main() {
  const passwordService = new PasswordService()
  await userSeeder({prisma,passwordService})
  await mediaSeeder({prisma})
  // await categorySeeder({prisma})
  // await brandSeeder({prisma})
  // await productSeeder({prisma})
  // await offerSeeder({prisma})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })