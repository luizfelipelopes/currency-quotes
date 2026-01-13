import { IsIn, IsNotEmpty } from "class-validator";

export class QuotesCurrencyDto {
    @IsIn(['usd', 'eur', 'ars', 'clp', 'uyu'])
    @IsNotEmpty()
    currency: string;
}