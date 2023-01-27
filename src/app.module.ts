import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  FilmsModule,
  PeopleModule,
  PlanetsModule,
  SpeciesModule,
  StarshipsModule,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    }),
    StarshipsModule,
    SpeciesModule,
    PeopleModule,
    FilmsModule,
    PlanetsModule,
  ],
})
export class AppModule {}
