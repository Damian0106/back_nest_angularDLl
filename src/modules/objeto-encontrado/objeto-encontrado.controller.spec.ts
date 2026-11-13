import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoEncontradoController } from './objeto-encontrado.controller';
import { ObjetoEncontradoService } from './objeto-encontrado.service';

describe('ObjetoEncontradoController', () => {
  let controller: ObjetoEncontradoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoEncontradoController],
      providers: [ObjetoEncontradoService],
    }).compile();

    controller = module.get<ObjetoEncontradoController>(ObjetoEncontradoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
