import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { keysToCamel, mockAxiosPlanets } from '../../shared';
import { GetPlanetPopulationResDto } from './dto';
import { PlanetsService } from './planets.service';

dotenv.config();

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);

    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: mockAxiosPlanets[0] }));

    jest.spyOn(axios, 'all').mockImplementation(() =>
      Promise.resolve([
        {
          data: mockAxiosPlanets[1],
        },
      ]),
    );

    jest.spyOn(service, 'findAll').mockImplementation(() =>
      Promise.resolve({
        total: 4,
        data: keysToCamel([
          ...mockAxiosPlanets[0].results,
          ...mockAxiosPlanets[1].results,
        ]),
      }),
    );
  });

  describe('findAll', () => {
    it('should return the correct data for planets', async () => {
      const result = await service.findAll();

      expect(result.data.length).toBe(4);
      expect(result.data[0]).toEqual(
        keysToCamel(mockAxiosPlanets[0].results[0]),
      );
    });
  });

  describe('getTotalPopulation', () => {
    it('should return total population of all planets', async () => {
      const result = await service.getTotalPopulation();

      expect(result).toBeInstanceOf(GetPlanetPopulationResDto);
      expect(result.totalPopulation).toEqual(600000);
    });
  });
});
