import { Injectable } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';

@Injectable()
export class AppService {

  constructor(private readonly quotesService: QuotesService) { }


  getQuotes(): any {
    return this.quotesService.list();
  }

  getQuoteCurrency(currency: string) {
    return this.quotesService.getCurrency(currency);
  }
}