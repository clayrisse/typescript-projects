import axios, { AxiosResponse } from 'axios';
// import { User, UserProps } from './User';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[]= [];
  events: Eventing = new Eventing();

  //PROJECT:
  //the homework here would be to do an "abstract CollectionView" to render
  

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
    ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch():void {
    axios.get(this.rootUrl)
    .then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        // const user = User.buildUser(value);
        // this.models.push(user)
        this.models.push(this.deserialize(value));
      });

      this.trigger('change')
    });
  }
}