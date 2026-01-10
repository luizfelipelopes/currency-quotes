import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { QuotesService } from './quotes/quotes.service';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [AppController],
      providers: [AppService, QuotesService],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

  });

  describe('root', () => {
    it('should return all quotes!"', () => {
      return request(app.getHttpServer())
        .get('/quotes')
        .expect(200)
        .expect(res => expect(res.body).toBeInstanceOf(Array));
    });

    it('should return dollar conversion', () => {
      return request(app.getHttpServer())
        .get('/quotes/conversion?currency=usd')
        .expect(200)
        .expect(res => expect(res.body).toMatchObject({
          moeda: 'USD',
          nome: 'Dólar'
        }));
    });

    it('should return euro conversion', () => {
      return request(app.getHttpServer())
        .get('/quotes/conversion?currency=eur')
        .expect(200)
        .expect(res => expect(res.body).toMatchObject({
          moeda: 'EUR',
          nome: 'Euro'
        }));
    });

    it('should return argentine peso conversion', () => {
      return request(app.getHttpServer())
        .get('/quotes/conversion?currency=ars')
        .expect(200)
        .expect(res => expect(res.body).toMatchObject({
          moeda: 'ARS',
          nome: 'Peso Argentino'
        }));
    });

    it('should return uruguayan peso conversion', () => {
      return request(app.getHttpServer())
        .get('/quotes/conversion?currency=uyu')
        .expect(200)
        .expect(res => expect(res.body).toMatchObject({
          moeda: 'UYU',
          nome: 'Peso Uruguayo'
        }));
    });


  });
});
