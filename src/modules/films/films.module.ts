import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';

@Module({
  providers: [FilmsService],
})
export class FilmsModule {}
