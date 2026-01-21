import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class ConversionService {
    constructor(private readonly quotesService: AppService) { }

    async convertQuote(currency: string, value: number): Promise<object> {
        const infoCurrency = await this.quotesService.getQuoteCurrency(currency);
        const currencyValue = infoCurrency.compra;
        const convertedValue = this.calcValueCurrency(currencyValue, value);

        return {
            value: convertedValue,
        };
    }

    private calcValueCurrency(currency: number, value: number) {
        return currency * value;
    }

}
