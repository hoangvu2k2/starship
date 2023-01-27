import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { keysToCamel } from '../../shared';
import { PeopleService } from '../people/people.service';
import { GetStarshipsResDto } from './dto';

@Injectable()
export class StarshipsService {
  constructor(private readonly peopleService: PeopleService) {}

  async findAll(): Promise<GetStarshipsResDto> {
    try {
      const lukeSkywalkerInfo = await this.peopleService.findOne(1);

      const starships = await axios
        .all(lukeSkywalkerInfo.starships.map((url) => axios.get(url)))
        .then((responses) => {
          return responses.map((response: any) => response.data);
        });

      return new GetStarshipsResDto(keysToCamel(starships));
    } catch (error: any) {
      throw new Error(
        `Get the starships related to Luke Skywalker failed: ${error.message}`,
      );
    }
  }
}
