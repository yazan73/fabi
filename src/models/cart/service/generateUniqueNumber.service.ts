import { Injectable } from "@nestjs/common";
import { GenerateNumberType } from "../entities/GenerateNumberType.entity";

@Injectable()
export class GenerateUniqueNumberService {
    
    separator = '-'
    
    generate(prop:{type:GenerateNumberType}){
        return prop.type + this.separator + this.getNewNumber()
    }

    getNewNumber() {
        return Math.floor(Math.random() * 1000000000);
    }
}