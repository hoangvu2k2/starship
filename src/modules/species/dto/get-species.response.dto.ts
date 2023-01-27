import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetSpeciesResDto {
  @Expose()
  @ApiProperty()
  name!: string;

  @Expose()
  @ApiProperty()
  classification!: string;

  @Expose()
  @ApiProperty()
  designation!: string;

  @Expose()
  @ApiProperty()
  averageHeight!: string;

  @Expose()
  @ApiProperty()
  skinColors!: string;

  @Expose()
  @ApiProperty()
  hairColors!: string;

  @Expose()
  @ApiProperty()
  eyeColors!: string;

  @Expose()
  @ApiProperty()
  averageLifespan!: string;

  @Expose()
  @ApiProperty()
  homeworld!: string;

  @Expose()
  @ApiProperty()
  language!: string;

  @Expose()
  @ApiProperty()
  people!: string[];

  @Expose()
  @ApiProperty()
  films!: string[];

  @Expose()
  @ApiProperty()
  created!: Date;

  @Expose()
  @ApiProperty()
  edited!: Date;

  @Expose()
  @ApiProperty()
  url!: string;

  constructor(partial: Partial<GetSpeciesResDto>) {
    Object.assign(this, partial);
  }
}
