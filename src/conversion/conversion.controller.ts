import { Controller, Get, Query } from '@nestjs/common';
import { ConversionService } from './conversion.service';

@Controller('conversion')
export class ConversionController {

    constructor(private readonly conversionService: ConversionService) { }

    @Get()
    getConversion(@Query() req: any) {
        const currency = req.currency;
        const value = req.value;

        return this.conversionService.convertQuote(currency, value);
    }

}
