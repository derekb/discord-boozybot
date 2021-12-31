import { BeerLookup, BeerQuery, BeerQueryResult } from '../query/lookup';
import { Client } from '../client/client';
import { BeerParser } from '../parser/parser';

export class BeerAdvocateLookup implements BeerLookup {
  private readonly client: Client;
  private readonly parser: BeerParser;

  constructor(client: Client, parser: BeerParser) {
    this.parser = parser;
    this.client = client;
  }

  async query(query: BeerQuery): Promise<BeerQueryResult> {
    let url = new URL('https://www.beeradvocate.com/search/');
    url.search = new URLSearchParams({ q: query.queryText }).toString();

    let res = await this.client.get(url.toString());

    return this.parser.parse(res);
  }
}
