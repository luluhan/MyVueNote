// import moduleA from './aaa.js';
import { name, num1, num2, add, Person } from './aaa.js';

// import addr from './aaa.js';

import getName from './aaa.js';


import * as aaa from './aaa.js';

console.log(name, num1, num2);

console.log('aaa.name', aaa.name);

console.log(add(1, 2));

const person = new Person();
person.run();

// console.log('addr', addr);
getName('远坂凛间桐樱');