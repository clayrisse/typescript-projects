import { User } from './models/User';

const user = new User({ id:6, name: 'not 99' , age:77 });

// console.log(user.get('name'))

user.on('save', () => {
  console.log('changeeee', user)
})

// user.trigger('change')
// user.set({name: "heeeello"})
user.save();