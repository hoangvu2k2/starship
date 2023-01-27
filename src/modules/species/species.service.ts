import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { keysToCamel } from '../../shared';
import { FilmsService } from '../films/films.service';
import { GetSpeciesListResDto } from './dto';

@Injectable()
export class SpeciesService {
  constructor(private readonly filmService: FilmsService) {}

  async findAll(): Promise<GetSpeciesListResDto> {
    try {
      const firstEpisode = await this.filmService.findOne(1);

      const species = await axios
        .all(firstEpisode.species.map((url) => axios.get(url)))
        .then((responses) => {
          return responses.map((response: any) => response.data);
        });

      return new GetSpeciesListResDto(keysToCamel(species));
    } catch (error: any) {
      throw new Error(
        `Get the classification of all species in the 1st episode: ${error.message}`,
      );
    }
  }
}
