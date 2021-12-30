export interface BeerQuery {
  queryText: string;
}

export interface BeerFound {
  type: 'found';
  provider: BeerProvider;
  url: URL;
}

export interface BeerNotFound {
  type: 'notFound';
}

export interface BeerQueryError {
  type: 'error';
  code: number;
  msg: string;
}

export type BeerProvider = 'BeerAdvocate';

export type BeerQueryResult = BeerFound | BeerNotFound | BeerQueryError;

export interface BeerLookup {
  query(query: BeerQuery): Promise<BeerQueryResult>;
}
