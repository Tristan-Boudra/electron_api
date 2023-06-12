import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recette } from './entities/recette.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recette]),
  ],
  controllers: [RecetteController],
  providers: [RecetteService]
})
export class RecetteModule {}
