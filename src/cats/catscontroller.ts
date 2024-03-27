import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import CreateCatDto from './dto/createcat-dto';
import { UpdateCatDto } from './dto/updatecat-dto';
import { CatsService } from './catsservice';
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {

  //construtor
  constructor(private catsService: CatsService) {}

  //requisições POST
  @Post()
  async create(@Body() createCatDto: CreateCatDto)
  {
    this.catsService.create(createCatDto);
  }//fim de create(...)

  //requisições GET
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  //requisições PUT
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  //requisições DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}