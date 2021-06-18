import { User } from './models/User';

const user = new User({name: 'myname', age: 20});

user.set({name:'new', age: 85})

user.on('change', () => {
  console.log('1')
})
user.on('change', () => {
  console.log('2')
})
user.on('save', () => {
  console.log('save3')
})

user.trigger('saveaa')

// console.log(user.get('name'))
// console.log(user.get('age'))

console.log( 'hi', user)
// console.log( user)