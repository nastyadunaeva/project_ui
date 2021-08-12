export class Stock {
  constructor(
    public symbol: string,
    public longName: string,
    public regularMarketPrice: number,
    public change: number,
    public description: string,
  ) {}

}
