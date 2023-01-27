import { Module } from '@nestjs/common';
import { FilmsService } from '../films/films.service';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';

@Module({
  controllers: [SpeciesController],
  providers: [SpeciesService, FilmsService],
})
export class SpeciesModule {}
