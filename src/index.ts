// import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', {
//   name: 'Richard',
//   age: 20,
// });

// axios.get('http://localhost:3000/users/1');

const user = new User({ id: 1, name: 'John', age: 120 });

// user.fetch();

// setTimeout(() => {
//   console.log(user); //
// }, 4000);

// user.set({ name: 'NEW NAME', age: 999 });

// user.save();

// user.events.on('change', () => {
//   console.log('we change it!'); //
// });

// user.events.trigger('change');

// // A quick reminder of accessors:
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('Anrey', 'Makarevich');
// console.log(person.fullName); //Anrey Makarevich

// user.on('change', () => {
//   console.log('user was changed'); //
// });

// console.log(user.get('name')); //
// user.on('change', () => {
//   console.log('User was changed, we probably need to update some HTML'); //
// });

// user.on('change', () => {
//   console.log(user); //
// });

user.on('save', () => {
  console.log(user); //
});

// user.trigger('change');
// user.set({ name: 'New name' });
// user.fetch();
user.save();

// // A quick reminder of 'this' works in JS:
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color); // this equal that is left of function call
//   },
// };

// colors.printColor(); // red
// const printColor = colors.printColor;
// printColor(); // error because left from printColor() is nothing (undefined)

// npm run start:parcel
