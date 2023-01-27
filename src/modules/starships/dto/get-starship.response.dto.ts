import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetStarshipResDto {
  @Expose()
  @ApiProperty()
  name!: string;

  @Expose()
  @ApiProperty()
  model!: string;

  @Expose()
  @ApiProperty()
  manufacturer!: string;

  @Expose()
  @ApiProperty()
  costInCredits!: string;

  @Expose()
  @ApiProperty()
  length!: string;

  @Expose()
  @ApiProperty()
  maxAtmospheringSpeed!: string;

  @Expose()
  @ApiProperty()
  crew!: string;

  @Expose()
  @ApiProperty()
  passengers!: string;

  @Expose()
  @ApiProperty()
  cargoCapacity!: string;

  @Expose()
  @ApiProperty()
  consumables!: string;

  @Expose()
  @ApiProperty()
  hyperdriveRating!: string;

  @Expose()
  @ApiProperty()
  MGLT!: string;

  @Expose()
  @ApiProperty()
  starshipClass!: string;

  @Expose()
  @ApiProperty()
  pilots!: string[];

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

  constructor(partial: Partial<GetStarshipResDto>) {
    Object.assign(this, partial);
  }
}
