export class Car {
  constructor(private _name: string, private _firstspeed: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get firstspeed(): number {
    return this._firstspeed;
  }

  public set firstspeed(firstspeed: number) {
    this._firstspeed = firstspeed;
  }
}
