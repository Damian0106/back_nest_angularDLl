import { PartialType } from '@nestjs/swagger';
import { CreateObjetoEncontradoDto } from './create-objeto-encontrado.dto';

export class UpdateObjetoEncontradoDto extends PartialType(CreateObjetoEncontradoDto) {}
