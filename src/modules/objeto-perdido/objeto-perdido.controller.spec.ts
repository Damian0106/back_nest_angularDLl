import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoPerdidoController } from './objeto-perdido.controller';
import { ObjetoPerdidoService } from './objeto-perdido.service';

describe('ObjetoPerdidoController', () => {
  let controller: ObjetoPerdidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoPerdidoController],
      providers: [ObjetoPerdidoService],
    }).compile();

    controller = module.get<ObjetoPerdidoController>(ObjetoPerdidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
