import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetStarshipsResDto } from './dto';
import { StarshipsService } from './starships.service';

@Controller('starships')
@ApiTags('Starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'Get the starships related to Luke Skywalker' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get the starships related to Luke Skywalker',
    type: GetStarshipsResDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: `Get the starships related to Luke Skywalker failed: 'error message'`,
    type: Error,
  })
  async findAll(): Promise<GetStarshipsResDto> {
    return this.starshipsService.findAll();
  }
}
