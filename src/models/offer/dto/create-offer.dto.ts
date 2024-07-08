// export class CreateOffer { 
//     name: string
//     description: string
//     percentOffer: string
//     brandId: string
// }
// // create-offer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateOfferDto {
    @ApiProperty({ description: 'Name of the offer' ,example:"new offer"})
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @ApiProperty({ description: 'Description of the offer (optional)',example:"desertion" })
    @IsOptional()
    @IsString()
    description?: string;
  
    @ApiProperty({ description: 'Percentage discount for the offer' ,example:5})
    @IsNotEmpty()
    @IsNumber()
    percentOffer: number;
  
    @ApiProperty({ description: 'ID of the brand associated with the offer',example:2 })
    @IsNotEmpty()
    @IsNumber()
    brandId: number;
  
    @ApiProperty({ description: 'Expiry date of the offer' })
    @IsNotEmpty()
    @IsDate()
    expiryDate: Date;
  }

  export class CreateOfferDtoBody {
    @ApiProperty({ description: 'Name of the offer' ,example:"new offer"})
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @ApiProperty({ description: 'Description of the offer (optional)',example:"desertion" })
    @IsOptional()
    @IsString()
    description?: string;
  
    @ApiProperty({ description: 'Percentage discount for the offer' ,example:5})
    @IsNotEmpty()
    @IsNumber()
    percentOffer: number;
  
    @ApiProperty({ description: 'ID of the brand associated with the offer',example:2 })
    @IsNotEmpty()
    @IsNumber()
    brandId: number;
  
    @ApiProperty({ description: 'Expiry date of the offer' })
    @IsNotEmpty()
    @IsString()
    expiryDate: string;
  }

  export class UpdateOfferDto {
    @ApiProperty({ description: 'New name for the offer (optional)' })
    @IsOptional()
    @IsString()
    name?: string;
  
    @ApiProperty({ description: 'New description for the offer (optional)' })
    @IsOptional()
    @IsString()
    description?: string;
  
    @ApiProperty({ description: 'New percentage discount for the offer (optional)' })
    @IsOptional()
    @IsNumber()
    percentOffer?: number;
  
    @ApiProperty({ description: 'New brand ID associated with the offer (optional)' })
    @IsOptional()
    @IsNumber()
    brandId?: number;
  
    @ApiProperty({ description: 'New expiry date for the offer (optional)' })
    @IsOptional()
    @IsDate()
    expiryDate?: Date;
  }