import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPlanetPopulationResDto, GetPlanetsResDto } from './dto';
import { PlanetsService } from './planets.service';

@Controller('planets')
@ApiTags('Planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  @ApiOperation({
    description: 'Get all the planets in the Galaxy',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all the planets in the Galaxy',
    type: GetPlanetsResDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: `Get all the planets in the Galaxy failed: 'error message'`,
    type: Error,
  })
  findAll(): Promise<GetPlanetsResDto> {
    return this.planetsService.findAll();
  }

  @Get('/total-population')
  @ApiOperation({
    description: 'Get the total population of all planets in the Galaxy',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get the total population of all planets in the Galaxy',
    type: GetPlanetPopulationResDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: `Get the total population of all planets in the Galaxy failed: 'error message'`,
    type: Error,
  })
  async getTotalPopulation(): Promise<GetPlanetPopulationResDto> {
    return this.planetsService.getTotalPopulation();
  }
}
