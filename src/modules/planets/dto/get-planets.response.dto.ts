import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { GetPlanetResDto } from './get-planet.response.dto';

@Exclude()
export class GetPlanetsResDto {
  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @ApiProperty({ type: GetPlanetResDto })
  data: GetPlanetResDto[] = [];

  constructor(data: GetPlanetResDto[]) {
    this.total = data.length;
    this.data = data;
  }
}
