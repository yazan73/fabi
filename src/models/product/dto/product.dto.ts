import { Media, Offer } from "@prisma/client"
import { GeneralBrand } from "src/models/brand/dto/getAllBrand.dto"

export class Product {
    id: number
    name: string
    description: string
    quantity: number
    wholesale: number 
    price: number
    priceAfterOffer?: number
    rate: number
    brand: GeneralBrand
    productDetails
    productGallery
    productCategory
    ProductFavored
    isFavorite: boolean
    hasOffer: boolean
    mainPhoto: Media
    offers?: Offer[]
    totalOffers?: number
    productCategoryId?: number

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
        this.offers = product.offers
        this.totalOffers = this.offers.reduce((current,offer)=> current + offer.percentOffer,0) || 0
        this.priceAfterOffer = this.price - (( this.price * this.totalOffers )/100)
        this.mainPhoto = product.mainPhoto
        if(this.offers?.length > 0) 
            this.hasOffer = true
        if(product?.ProductFavored?.length > 0)
            this.isFavorite = true
        this.productCategoryId = product.productCategoryId
    }
}