import { Inject, Injectable } from '@nestjs/common';
import { CreateObjetoEncontradoDto } from './dto/create-objeto-encontrado.dto';
import { UpdateObjetoEncontradoDto } from './dto/update-objeto-encontrado.dto';
import { Repository } from 'typeorm';
import { ObjetoEncontrado } from './entities/objeto-encontrado.entity';

@Injectable()
export class ObjetoEncontradoService {

  constructor(@Inject('OBJETO_ENCONTRADO_REPOSITORY') private objetoEncontradoRepository: Repository<ObjetoEncontrado>){}

  create(createObjetoEncontradoDto: CreateObjetoEncontradoDto) {
    return this.objetoEncontradoRepository.save(createObjetoEncontradoDto);
  }

  findAll() {
    return this.objetoEncontradoRepository.find();
  }

  findOne(id: number) {
    return this.objetoEncontradoRepository.findOne({
      where:{
        id:id
      }
    });
  }

  update(id: number, updateObjetoEncontradoDto: UpdateObjetoEncontradoDto) {
    return this.objetoEncontradoRepository.update(id, updateObjetoEncontradoDto)
  }

  remove(id: number) {
    return this.objetoEncontradoRepository.delete(id);
  }
}
