// import axios, { AxiosResponse } from 'axios';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
// import { UserForm } from './views/UserForm';
// import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

// axios.post('http://localhost:3000/users', {
//   name: 'Richard',
//   age: 20,
// });

// axios.get('http://localhost:3000/users/1');

// const user = new User({ id: 1, name: 'John', age: 120 });
// const user = User.buildUser({ id: 1 });

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

// const person = new Person('John', 'Wane');
// console.log(person.fullName); //John Wane

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

// user.on('save', () => {
//   console.log(user); //
// });

// user.trigger('change');
// user.set({ name: 'New name' });
// user.fetch();
// user.save();

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

// user.on('change', () => {
//   console.log(user); //
// });

// user.fetch();

// axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
//   console.log(response.data); //
// });

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection); //
// });

// collection.fetch();

// const user = User.buildUser({ name: 'NAME', age: 20 });

// const userForm = new UserForm(document.getElementById('root')!, user);
// //or in longer implicit way:
// const root = document.getElementById('root');
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();
// } else {
//   throw new Error('Root element not found');
// }

// userForm.render();

// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();

//   console.log(userEdit); //
// } else {
//   throw new Error('Root element not found');
// }

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();

// npm run start:parcel
// npm run start:db
