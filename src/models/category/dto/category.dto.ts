import { Media } from "@prisma/client"

export class ProductCategory {
    id: number
    name: string
    icon: Media

    constructor(category){
        this.icon = category.icon
        this.id = category.id
        this.name = category.name
    }
}