import { Controller, Get, Query } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { ConversionCurrencyDto } from './dto/conversion-currency.dto';

@Controller('conversion')
export class ConversionController {

    constructor(private readonly conversionService: ConversionService) { }

    @Get()
    getConversion(@Query() req: ConversionCurrencyDto) {
        const currency = req.currency;
        const value = req.value;

        return this.conversionService.convertQuote(currency, value);
    }

}
