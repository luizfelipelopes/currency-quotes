import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { QuotesCurrencyDto } from './quotes/dto/quotes-currency.dto';


@Controller('/quotes')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getQuotes(): string {
    return this.appService.getQuotes();
  }

  @Get('/conversion')
  getQuoteConversion(@Query() param: QuotesCurrencyDto) {
    const currency = param.currency;
    return this.appService.getQuoteCurrency(currency);
  }

}
