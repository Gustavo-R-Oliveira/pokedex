export interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResponseResults[];
}

export interface IResponseResults {
  name: string;
  url: string;
}
