import { BeerQueryResult } from '../query/lookup';
import { BeerParser } from '../parser/parser';
import { Response } from 'got';

export class BeerAdvocateParser implements BeerParser {
  async parse(_: Response<string>): Promise<BeerQueryResult> {
    return Promise.resolve({ type: 'notFound' });
  }
}
