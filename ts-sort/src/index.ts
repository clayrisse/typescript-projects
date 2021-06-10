import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection( [100, 3, -5, 685, 674674,  -20])

// numbersCollection.sort();
// console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('ergegK')
// charactersCollection.sort()
// console.log(charactersCollection.data)


const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(55555);
linkedList.sort();


linkedList.print();