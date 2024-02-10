interface UserProps {
  name?: string; // optional properties to ability change only one property at the time
  age?: number; // optional properties to ability change only one property at the time
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Object.assign([previous object], [new data to assign])
    // this is going to get overwritten and replaced data
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
