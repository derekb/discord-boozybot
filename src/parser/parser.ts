import { BeerQueryResult } from '../query/lookup';
import { Response } from "got";

export interface BeerParser {
  parse(res: Response<string>): Promise<BeerQueryResult>;
}
