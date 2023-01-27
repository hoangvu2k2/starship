import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { mockAxiosStarships, mockLukeSkywalker } from '../../shared';
import { PeopleService } from '../people/people.service';
import { GetStarshipsResDto } from './dto';
import { StarshipsService } from './starships.service';

describe('StarshipsService', () => {
  let service: StarshipsService;
  let peopleService: PeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StarshipsService,
        {
          provide: PeopleService,
          useValue: {
            findOne: jest.fn(() => mockLukeSkywalker),
          },
        },
      ],
    }).compile();

    service = module.get<StarshipsService>(StarshipsService);
    peopleService = module.get<PeopleService>(PeopleService);

    jest.spyOn(axios, 'all').mockImplementation(() =>
      Promise.resolve([
        { data: mockAxiosStarships[0] },
        {
          data: mockAxiosStarships[1],
        },
      ]),
    );
  });

  it('should return the correct data for starships', async () => {
    const result = await service.findAll();

    expect(peopleService.findOne).toBeCalledWith(1);
    expect(result.data[0].name).toBe(mockAxiosStarships[0].name);
    expect(result.data[1].name).toBe(mockAxiosStarships[1].name);
    expect(await service.findAll()).toBeInstanceOf(GetStarshipsResDto);
  });

  it('should handle errors', async () => {
    (axios.all as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    await expect(service.findAll()).rejects.toThrowError(
      'Get the starships related to Luke Skywalker failed: API Error',
    );
  });
});
