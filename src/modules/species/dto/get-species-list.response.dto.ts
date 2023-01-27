import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { GetSpeciesResDto } from './get-species.response.dto';

@Exclude()
export class GetSpeciesListResDto {
  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @ApiProperty({ type: GetSpeciesResDto })
  data: GetSpeciesResDto[] = [];

  constructor(data: GetSpeciesResDto[]) {
    this.total = data.length;
    this.data = data;
  }
}
