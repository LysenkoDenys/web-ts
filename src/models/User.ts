import { Eventing } from './Eventing';
export interface UserProps {
  name?: string; // optional properties to ability change only one property at the time
  age?: number; // optional properties to ability change only one property at the time
  id?: number; // optional properties to ability change only one property at the time
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Object.assign([previous object], [new data to assign])
    // this is going to get overwritten and replaced data
  }
}
