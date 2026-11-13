import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoEncontradoService } from './objeto-encontrado.service';

describe('ObjetoEncontradoService', () => {
  let service: ObjetoEncontradoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoEncontradoService],
    }).compile();

    service = module.get<ObjetoEncontradoService>(ObjetoEncontradoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
