export class Car {
  constructor(private _name: string, private _secondspeed: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get secondspeed(): number {
    return this._secondspeed;
  }

  public set secondspeed(secondspeed: number) {
    this._secondspeed = secondspeed;
  }
}
