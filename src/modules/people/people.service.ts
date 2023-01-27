import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { keysToCamel } from '../../shared';
import { GetPersonResDto } from './dto';

@Injectable()
export class PeopleService {
  async findOne(id: number): Promise<GetPersonResDto> {
    try {
      const { data } = await axios.get(`${process.env.SWAPI_URL}/people/${id}`);

      return plainToInstance(GetPersonResDto, keysToCamel(data));
    } catch (error: any) {
      throw new Error(`Get person by id failed: ${error.message}`);
    }
  }
}
