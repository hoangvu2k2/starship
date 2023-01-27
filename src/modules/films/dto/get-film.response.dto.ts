import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetFilmResDto {
  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  episodeId!: string;

  @Expose()
  @ApiProperty()
  openingCrawl!: string;

  @Expose()
  @ApiProperty()
  director!: string;

  @Expose()
  @ApiProperty()
  producer!: string;

  @Expose()
  @ApiProperty()
  releaseDate!: string;

  @Expose()
  @ApiProperty()
  characters!: string[];

  @Expose()
  @ApiProperty()
  planets!: string[];

  @Expose()
  @ApiProperty()
  starships!: string[];

  @Expose()
  @ApiProperty()
  vehicles!: string[];

  @Expose()
  @ApiProperty()
  species!: string[];

  @Expose()
  @ApiProperty()
  created!: Date;

  @Expose()
  @ApiProperty()
  edited!: Date;

  @Expose()
  @ApiProperty()
  url!: string;

  constructor(partial: Partial<GetFilmResDto>) {
    Object.assign(this, partial);
  }
}
