import { UserProps } from "./User";

export class Attributes <T>{
  constructor(private data: T) {}
  
  //the "K" means the type of that specific key inside the "T" generic type
  //to to filter the types to the une that is really required
  // get<K extends keyof T> (key: K): T[K] {
  get = <K extends keyof T> (key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update); 
    //this functions overwrites all the content of the firts argument with the second argument
  }

  getAll(): T {
    return this.data;
  }
}




// const attrs = new Attributes<UserProps>({id: 5, age: 20, name: 'qwer'})

// const name = attrs.get('name')
// const age = attrs.get('age')
// const id = attrs.get('id')