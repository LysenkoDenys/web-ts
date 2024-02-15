export class Attributes<T extends object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update); // Object.assign([previous object], [new data to assign])
    // this is going to get overwritten and replaced data
  };

  getAll(): T {
    return this.data;
  }
}
