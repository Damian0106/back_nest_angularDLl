import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjetoEncontradoService } from './objeto-encontrado.service';
import { CreateObjetoEncontradoDto } from './dto/create-objeto-encontrado.dto';
import { UpdateObjetoEncontradoDto } from './dto/update-objeto-encontrado.dto';

@Controller('objeto-encontrado')
export class ObjetoEncontradoController {
  constructor(private readonly objetoEncontradoService: ObjetoEncontradoService) {}

  @Post()
  create(@Body() createObjetoEncontradoDto: CreateObjetoEncontradoDto) {
    return this.objetoEncontradoService.create(createObjetoEncontradoDto);
  }

  @Get()
  findAll() {
    return this.objetoEncontradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objetoEncontradoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjetoEncontradoDto: UpdateObjetoEncontradoDto) {
    return this.objetoEncontradoService.update(+id, updateObjetoEncontradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objetoEncontradoService.remove(+id);
  }
}
