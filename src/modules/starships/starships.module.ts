import { Module } from '@nestjs/common';
import { PeopleService } from '../people/people.service';
import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService, PeopleService],
})
export class StarshipsModule {}
