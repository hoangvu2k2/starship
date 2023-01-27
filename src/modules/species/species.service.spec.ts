import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { mockAxiosSpecies, mockFirstFilm } from '../../shared';
import { FilmsService } from '../films/films.service';
import { GetSpeciesListResDto } from './dto';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let service: SpeciesService;
  let filmService: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeciesService,
        {
          provide: FilmsService,
          useValue: {
            findOne: jest.fn(() => mockFirstFilm),
          },
        },
      ],
    }).compile();

    service = module.get<SpeciesService>(SpeciesService);
    filmService = module.get<FilmsService>(FilmsService);

    jest.spyOn(axios, 'all').mockImplementation(() =>
      Promise.resolve([
        { data: mockAxiosSpecies[0] },
        {
          data: mockAxiosSpecies[1],
        },
      ]),
    );
  });

  it('should return the correct data for starships', async () => {
    const result = await service.findAll();

    expect(filmService.findOne).toBeCalledWith(1);
    expect(result.data[0].name).toBe(mockAxiosSpecies[0].name);
    expect(result.data[1].name).toBe(mockAxiosSpecies[1].name);
    expect(await service.findAll()).toBeInstanceOf(GetSpeciesListResDto);
  });

  it('should handle errors', async () => {
    (axios.all as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    await expect(service.findAll()).rejects.toThrowError(
      'Get the classification of all species in the 1st episode: API Error',
    );
  });
});
