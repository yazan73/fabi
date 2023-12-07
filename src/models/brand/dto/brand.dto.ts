import { Media, Offer } from '@prisma/client';
import { Product } from 'src/models/product/dto/product.dto';

export class Brand {
  id: number;
  name: string;
  logo: Media;
  offers: Offer[];
  products: Product[];

  constructor(brand) {
    this.id = brand.id;
    this.logo = brand.logo;
    this.name = brand.name;
    this.offers = brand.offers;
    this.products = brand.products.map((product) => new Product(product));
  }
}
