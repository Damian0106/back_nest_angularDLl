import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ObjetoPerdidoService } from './objeto-perdido.service';
import { CreateObjetoPerdidoDto } from './dto/create-objeto-perdido.dto';
import { UpdateObjetoPerdidoDto } from './dto/update-objeto-perdido.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
@ApiTags('objeto-perdido')
@Controller('objeto-perdido')
export class ObjetoPerdidoController {
  constructor(private readonly objetoPerdidoService: ObjetoPerdidoService) {}

  @Post()
  create(@Body() createObjetoPerdidoDto: CreateObjetoPerdidoDto) {
    return this.objetoPerdidoService.create(createObjetoPerdidoDto);
  }

  @Get()
  findAll() {
    return this.objetoPerdidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objetoPerdidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjetoPerdidoDto: UpdateObjetoPerdidoDto) {
    return this.objetoPerdidoService.update(+id, updateObjetoPerdidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objetoPerdidoService.remove(+id);
  }
}
