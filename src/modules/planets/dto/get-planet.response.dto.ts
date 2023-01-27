import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetPlanetResDto {
  @Expose()
  @ApiProperty()
  name!: string;

  @Expose()
  @ApiProperty()
  rotationPeriod!: string;

  @Expose()
  @ApiProperty()
  orbitalPeriod!: string;

  @Expose()
  @ApiProperty()
  diameter!: string;

  @Expose()
  @ApiProperty()
  climate!: string;

  @Expose()
  @ApiProperty()
  gravity!: string;

  @Expose()
  @ApiProperty()
  terrain!: string;

  @Expose()
  @ApiProperty()
  surfaceWater!: string;

  @Expose()
  @ApiProperty()
  population!: string;

  @Expose()
  @ApiProperty()
  residents!: string[];

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

  constructor(partial: Partial<GetPlanetResDto>) {
    Object.assign(this, partial);
  }
}
