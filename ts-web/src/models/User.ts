interface UserProps {
  name?: string;
  age?: number;
  //the "?" means thar name and age are opcional
}

//type for a function that takes no argumentes and returns nothing
type Callback = () => void


export class User {
  events: { [key: string]: Callback[] } = {}
  constructor(private data: UserProps) {}
  
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); 
    //this functions overwrites all the content of the fires argument with the second argument
  }

  // on(eventName: string, callback: () => {}) {
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if(!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}