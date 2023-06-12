import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recette } from './entities/recette.entity';

@Injectable()
export class RecetteService {

  constructor (@InjectRepository(Recette) private data: Repository<Recette>) {}

  create(dto: CreateRecetteDto) {
    return this.data.save(dto);
  }

  findAll() {
    return this.data.find();
  }

  findOne(id: number): Promise<Recette> {
    return this.data.findOneBy({ id }).catch(e => {
      throw new NotFoundException(id);
  });
  }

  async update(id: number, updateRecetteDto: UpdateRecetteDto): Promise<Recette> {
    let done = await this.data.update(id, updateRecetteDto);
    if (done.affected != 1)
      throw new NotFoundException(id);
    return this.data.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    let done = await this.data.delete(id);
    if (done.affected != 1)
      throw new NotFoundException(id);
  }
}