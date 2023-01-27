import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetSpeciesListResDto } from './dto';
import { SpeciesService } from './species.service';

@Controller('species')
@ApiTags('Species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  @ApiOperation({
    description: 'Get the classification of all species in the 1st episode',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get the classification of all species in the 1st episode',
    type: GetSpeciesListResDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: `Get the classification of all species in the 1st episode failed: 'error message'`,
    type: Error,
  })
  async findAll(): Promise<GetSpeciesListResDto> {
    return this.speciesService.findAll();
  }
}
