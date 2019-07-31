function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let u:undefined = undefined;
let boolean:number = 1;
let union:string|number = 'sadas';

union = 1;

console.log(boolean, u, union.toString());

interface Person {
  name: string;
  age: number;
}

let tom:Person = {
  name: 'wcz',
  age: 12,
};

console.log('tom', tom);

export default 1;