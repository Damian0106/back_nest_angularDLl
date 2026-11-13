import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoPerdidoService } from './objeto-perdido.service';

describe('ObjetoPerdidoService', () => {
  let service: ObjetoPerdidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoPerdidoService],
    }).compile();

    service = module.get<ObjetoPerdidoService>(ObjetoPerdidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
