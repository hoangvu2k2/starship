import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { GetStarshipResDto } from './get-starship.response.dto';

@Exclude()
export class GetStarshipsResDto {
  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @ApiProperty({ type: GetStarshipResDto })
  data: GetStarshipResDto[] = [];

  constructor(data: GetStarshipResDto[]) {
    this.total = data.length;
    this.data = data;
  }
}
