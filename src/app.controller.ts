import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getQuotes(): string {
    return this.appService.getQuotes();
  }

  @Get('/usd')
  getQuoteDollar() {
    return this.appService.getQuoteCurrency('usd');
  }

  @Get('/eur')
  getQuoteEuro() {
    return this.appService.getQuoteCurrency('eur');
  }

  @Get('/ars')
  getQuoteArs() {
    return this.appService.getQuoteCurrency('ars');
  }

  @Get('/clp')
  getQuotesClp() {
    return this.appService.getQuoteCurrency('clp');
  }

  @Get('uyu')
  getQuotesUyu() {
    return this.appService.getQuoteCurrency('uyu');
  }
}
