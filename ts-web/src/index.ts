import { UserForm } from "./views/UserForm";
import { User } from './models/User';

const user = User.buildUser({name:'gggg', age: 20});
// console.log("sdadasdas")
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render()
