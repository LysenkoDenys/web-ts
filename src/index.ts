import { User } from './models/User';

const user = new User({ name: 'Jack', age: 36 });

user.on('change', () => {});

console.log(user.on('', () => {})); //
