import { Media, Offer } from '@prisma/client';
import { groupByKey } from 'src/common/utilities/groupByKey';
import { ConvertObjectToArray } from 'src/common/utilities/objectToArray';
import { Product } from 'src/models/product/dto/product.dto';

export class Brand {
  id: number;
  name: string;
  logo: Media;
  offers: Offer[];
  products: Product[];
  productByCategory: Product[][]

  constructor(brand) {
    this.id = brand.id;
    this.logo = brand.logo;
    this.name = brand.name;
    this.offers = brand.offers.map(offer => ({...offer , products: offer.products.map((product) => new Product(product)) }))
    this.products = brand.products.map((product) => new Product(product));
    this.productByCategory = ConvertObjectToArray( groupByKey(this.products,'productCategoryId',{}))
  }
}
