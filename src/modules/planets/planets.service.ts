import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { parseInt } from 'lodash';
import { keysToCamel } from '../../shared';
import {
  GetPlanetPopulationResDto,
  GetPlanetResDto,
  GetPlanetsResDto,
} from './dto';

@Injectable()
export class PlanetsService {
  async findAll(): Promise<GetPlanetsResDto> {
    try {
      const url = `${process.env.SWAPI_URL}/planets`;
      const urls: string[] = [];
      const { data: firstPlanetsPage } = await axios.get(url);

      const total = parseInt(firstPlanetsPage.count);
      const pageSize = firstPlanetsPage.results.length;
      for (let i = 2; i <= Math.ceil(total / pageSize); i++) {
        urls.push(`${url}/?page=${i}`);
      }

      const planets: GetPlanetResDto[] = [
        ...keysToCamel(firstPlanetsPage.results),
      ];
      await axios.all(urls.map((url) => axios.get(url))).then((responses) => {
        responses.map((response: any) => {
          planets.push(...keysToCamel(response.data.results));
        });
      });

      return new GetPlanetsResDto(keysToCamel(planets));
    } catch (error: any) {
      throw new Error(`Get all the planets failed: ${error.message}`);
    }
  }

  async getTotalPopulation(): Promise<GetPlanetPopulationResDto> {
    try {
      const planets = await this.findAll();
      const totalPopulation = planets.data.reduce((total, planet) => {
        return total + (parseInt(planet.population) || 0);
      }, 0);

      return plainToInstance(GetPlanetPopulationResDto, { totalPopulation });
    } catch (error: any) {
      throw new Error(
        `Get the total population of all planets in the Galaxy failed: ${error.message}`,
      );
    }
  }
}
