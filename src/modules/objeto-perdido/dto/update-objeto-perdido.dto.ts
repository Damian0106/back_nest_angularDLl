import { PartialType } from '@nestjs/swagger';
import { CreateObjetoPerdidoDto } from './create-objeto-perdido.dto';

export class UpdateObjetoPerdidoDto extends PartialType(CreateObjetoPerdidoDto) {}
