import { Test, TestingModule } from '@nestjs/testing';
import { ConversionService } from './conversion.service';
import { AppService } from '../app.service';
import { QuotesService } from '../quotes/quotes.service';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversionService, AppService, QuotesService],
    }).compile();

    service = module.get<ConversionService>(ConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
