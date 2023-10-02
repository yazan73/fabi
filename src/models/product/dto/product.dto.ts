import { GeneralBrand } from "src/models/brand/dto/getAllBrand.dto"

export class Product {
    id: number
    name: string
    description: string
    quantity: number
    wholesale: number 
    price: number
    rate: number
    brand: GeneralBrand
    productDetails
    productGallery
    productCategory
    ProductFavored
    isFavorite: boolean
    hasOffer: boolean

    constructor(product) {
        this.id = product.id
        this.name = product.name
        this.description = product.description
        this.quantity = product.quantity
        this.wholesale = product.wholesale
        this.price = product.price
        this.rate = product.rate
        this.brand = product.brand
        this.productDetails = product.productDetails
        this.productGallery = product.productGallery
        this.productCategory = product.productCategory
        this.isFavorite = false
        this.hasOffer = false
        if(product?.Offers?.length > 0) 
            this.hasOffer = true
        if(product?.ProductFavored?.length > 0)
            this.isFavorite = true
    }
}