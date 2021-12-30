import {Response} from "got";

export interface Client {
  get(url: string | URL): Promise<Response<string>>;
}
