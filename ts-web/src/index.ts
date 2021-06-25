import { UserEdit } from "./views/UserEdit";
import { User } from './models/User';

const user = User.buildUser({name:'gggg', age: 20});
// console.log("sdadasdas")
const root = document.getElementById('root')


if (root) {
  const userEdit= new UserEdit(root, user);
  userEdit.render()
  console.log(userEdit)
} else {
  throw new Error ('Root element not found baby')
}

