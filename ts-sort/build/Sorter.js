"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//abstract classes only function as parent classes and you can not make an instance of it
// we also have to declare the methods that will latr on be provided to work
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        // const length = this.collection.length 
        var length = this.length;
        // this.collection.    //you can see what methods are available for number an array 
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
/*
// This
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection
//   }
// }
// is the same as ----- this:

// class Sorter {
//   constructor(public collection: number[]) {}
// }
*/
// class Sorter {
//   constructor(public collection: number[] | string) {}
//   sort(): void {
//     // const length = this.collection.length 
//     const { length } = this.collection 
//     // this.collection.    //you can see what methods are available for number an array 
//     for (let i=0; i < length; i++) {
//       for (let j=0; j < length-i-1 ;j++) {
//         //this works only works IF is a number (in the array)
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j+1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j+1];
//             this.collection[j+1] = leftHand;
//           }
//         }
//         if (typeof this.collection === 'string')
//       }
//     }
//   }
// }
