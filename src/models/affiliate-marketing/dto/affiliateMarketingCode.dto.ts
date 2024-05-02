import { User } from "src/common/entities/user.entity"

export class MarketingCodeDto {

    id:number
    code: string
    codeUsedCount: number
    userBalance: number

    constructor(codeDetails) {
        this.id = codeDetails.id
        this.code = codeDetails.code
        this.userBalance = codeDetails.userBalance
    }
}