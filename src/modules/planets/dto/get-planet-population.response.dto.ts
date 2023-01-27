import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetPlanetPopulationResDto {
  @Expose()
  @ApiProperty()
  totalPopulation!: number;

  constructor(partial: Partial<GetPlanetPopulationResDto>) {
    Object.assign(this, partial);
  }
}
