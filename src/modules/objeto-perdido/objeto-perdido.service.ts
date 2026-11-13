import { Inject, Injectable } from '@nestjs/common';
import { CreateObjetoPerdidoDto } from './dto/create-objeto-perdido.dto';
import { UpdateObjetoPerdidoDto } from './dto/update-objeto-perdido.dto';
import { Repository } from 'typeorm';
import { ObjetoPerdido } from './entities/objeto-perdido.entity';

@Injectable()
export class ObjetoPerdidoService {

  constructor(@Inject('OBJETO_PERDIDO_REPOSITORY') private objetoPerdidoRepository:Repository<ObjetoPerdido>){}


  async create(createObjetoPerdidoDto: CreateObjetoPerdidoDto) {
    const objetoPerdido = new ObjetoPerdido()
    objetoPerdido.nombre=createObjetoPerdidoDto.nombre
    objetoPerdido.detalle=createObjetoPerdidoDto.detalle
    return await this.objetoPerdidoRepository.save(objetoPerdido)
  }

  async findAll() {
    return await this.objetoPerdidoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} objetoPerdido`;
  }

  update(id: number, updateObjetoPerdidoDto: UpdateObjetoPerdidoDto) {
    return `This action updates a #${id} objetoPerdido`;
  }

  remove(id: number) {
    return `This action removes a #${id} objetoPerdido`;
  }
}
