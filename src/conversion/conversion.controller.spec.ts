import { Test, TestingModule } from '@nestjs/testing';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';
import { AppService } from '../app.service';
import { QuotesService } from '../quotes/quotes.service';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

describe('ConversionController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversionController],
      providers: [ConversionService, AppService, QuotesService]
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should be call conversion', () => {
    const currency = 'usd';
    const value = 1;
    return request(app.getHttpServer())
      .get(`/conversion?currency=${currency}&value=${value}`)
      .expect(200)
      .expect(res => expect(res.body).toBeInstanceOf(Object))
  });
});
