import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { keysToCamel } from '../../shared';
import { GetFilmResDto } from './dto';

@Injectable()
export class FilmsService {
  async findOne(id: number): Promise<GetFilmResDto> {
    try {
      const { data } = await axios.get(`${process.env.SWAPI_URL}/films/${id}`);

      return plainToInstance(GetFilmResDto, keysToCamel(data));
    } catch (error: any) {
      throw new Error(`Get person by id failed: ${error.message}`);
    }
  }
}
