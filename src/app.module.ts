import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesService } from './quotes/quotes.service';
import { ConversionService } from './conversion/conversion.service';
import { ConversionController } from './conversion/conversion.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ConversionController],
  providers: [AppService, QuotesService, ConversionService],
})
export class AppModule { }
