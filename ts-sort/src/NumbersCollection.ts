// export class NumberCollection {
//   data: number[]

//   constructor() {
//     this.data= data
//   }
// }
import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) {
    super();
  }

  //this is an acceser
  get length() :number {
    return this.data.length
  } //NumbersCollection.length    without parenthesis
  //uses a "getter"

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  } 

  swap(leftIndex: number, rightIndex: number ): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand

  }
}