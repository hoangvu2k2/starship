import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetPersonResDto {
  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  height: string;

  @Expose()
  @ApiProperty()
  mass: string;

  @Expose()
  @ApiProperty()
  hairColor: string;

  @Expose()
  @ApiProperty()
  skinColor: string;

  @Expose()
  @ApiProperty()
  eyeColor: string;

  @Expose()
  @ApiProperty()
  birthYear: string;

  @Expose()
  @ApiProperty()
  gender: string;

  @Expose()
  @ApiProperty()
  homeworld: string;

  @Expose()
  @ApiProperty()
  films: string[];

  @Expose()
  @ApiProperty()
  species: string[];

  @Expose()
  @ApiProperty()
  vehicles: string[];

  @Expose()
  @ApiProperty()
  starships: string[];

  @Expose()
  @ApiProperty()
  created: string;

  @Expose()
  @ApiProperty()
  edited: string;

  @Expose()
  @ApiProperty()
  url: string;

  constructor(partial: Partial<GetPersonResDto>) {
    Object.assign(this, partial);
  }
}
