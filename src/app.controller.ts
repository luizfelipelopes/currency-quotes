import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('/quotes')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getQuotes(): string {
    return this.appService.getQuotes();
  }

  @Get('/conversion')
  getQuoteConversion(@Query() param: any) {
    const currency = param.currency;
    return this.appService.getQuoteCurrency(currency);
  }

}
