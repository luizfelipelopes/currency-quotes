import { IsIn, IsNotEmpty } from "class-validator";

export class ConversionCurrencyDto {
    @IsIn(['usd', 'eur', 'ars', 'clp', 'uyu'])
    @IsNotEmpty()
    currency: string;

    @IsNotEmpty()
    value: number;
}