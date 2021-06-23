import axios, { AxiosPromise } from 'axios';


interface HasId {
  id?: number;
}

// eg. new Sync('http://localhost:3000/users')

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
    // axios.get(`${this.rootUrl}/${id}`)
    // .then((response: AxiosResponse): void => {
      //   this.set(response.data);
      // });
  } 

  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return axios.post(this.rootUrl, data)
    }
  }
}