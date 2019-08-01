function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let u;
let boolean = 1;
let union: string|number = 'sadas';

union = 1;

console.log(boolean, u, union.toString());

interface IPerson {
  name?: string;
  age: number;
  sex?: string;
  [propName: string]: string|number|undefined;
}

let a = Symbol(1);
let tom: IPerson = {
  age: 12,
  [a]: 12,
};

tom.age = 13;
tom.name = 'name';

console.log('tom', tom);

/**
 * @description 数组
 */

// let array: (number|string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array: Array<number|string> = [1, 2, 3, 4, 5, 6, 7, 8, '9'];

interface IArray {
  [index: number]: any;
}

let iArray: IArray = [1, 2, 3, 4, 5, '6'];

console.log('array', array, iArray);


/**
 * @description 函数
 */
function A(x: number, y: number): number {
  let i: IArguments = arguments;

  return i[0] + i[1];
}

console.log(A(1, 2));

let mySum = (x: number, y: number): number => {
  return x + y;
};

console.log('mySum', mySum(1, 2));

let mySum2: (x: number, y: number) => number = function(x: number, y: number) {
  return x + y;
};

console.log('mySum2', mySum2(1, 1));

// type ISearchFunc = (filter?: object) => string;
interface ISearchFunc {
  (filter: object, name?: string): string;
  // [propName: string]: any;
}

let searchFunc: ISearchFunc = function (filter: object, name: any) {
  console.log(filter);

  return name;
};

console.log(searchFunc({
  a: 'a'
}, '123'));

function selectFunc(a: number, b: string = 'cat', ...items: (number)[]) {
  console.log(a, b, items);
}

selectFunc(1, '122', 1, 2, 3);

function reverse(x: number): number;
function reverse(x?: string): string;
function reverse(x?: number|string): number|string|void {
  let a: number|string;

  if (typeof x === 'number') {
    a = x + 1;

    return a;
  } else if (typeof x === 'string') {
    a = x + 'sdfsd';

    return a;
  }
}

console.log('reverse', reverse(1), reverse('212'), reverse());

/**
 * @description 类型断言
 */

function assertType(s: string|number) {
  console.log('assertType', (s as string).length);
  console.log('assertType', (s as number).toFixed(1));
}

assertType(1);

const test: Hello.IGlobalTest = {
  count: 1,
  name: 'Jim',
};

console.log(test);

/**
 * @description 类型别名
 */
type Name = string;

let typeAlias: Name = 'typeAlias';

console.log(typeAlias);

/**
 * @description 字符串字面量类型
 */
type StringLiteralType = 'click' | 'change' | 'input';

let stringLiteralType: StringLiteralType = 'click';

console.log(stringLiteralType);

/**
 * @description 元组
 */
let tuple: [string, number | symbol];

tuple = ['1', 1];

tuple[0] = 'string';
tuple.push(Symbol(1));

console.log(tuple);

/**
 * @description 枚举
 */
enum testEnum {a, b, c, d = '5' as any, e = 'blue'.length}

console.log(testEnum);

/**
 * @description 类
 */
abstract class AbstractClass {
  public test: string;

  public constructor(test: string) {
    this.test = test;
  }

  public abstract doAbstrct(): any;
}

class ACInstence extends AbstractClass {
  public constructor(test: string) {
    super(test);

    this.test = test;
  }

  public doAbstrct() {
    return 'doAbstrct';
  }
}

const acInstence: ACInstence = new ACInstence('test');

console.log(acInstence.test, acInstence.doAbstrct());

class Animal {
  public static num = 12;
  public name: string = '';

  public constructor(name: string) {
    this.name = name;
  }

  public sayHi() {
    return `My name is ${this.name} ${Animal.num}`;
  }

  public usePrivateMethod(): string {
    return this.privateMethod();
  }

  protected protectMethod(from: string): string {
    return `Come from ${from}`;
  }

  private privateMethod() {
    return 'privateMethod';
  }
}

class Cat extends Animal {
  public constructor(name: string) {
    super(name);

    this.name = `Cat ${name}`;
  }

  public doSomething() {
    return this.protectMethod('Cat');
  }
}

const animal = new Animal('animal');
const cat = new Cat('Cat');

console.log(animal.name, '：', animal.sayHi());
console.log(cat.name, '：', cat.doSomething(), cat.usePrivateMethod());

/**
 * @description 类实现接口
 */
interface IAlarm {
  alert(): any;
}
interface ILight extends IAlarm {
  lightOn(): any;
  lightOff(): any;
}

class Door {

}
class AlarmDoor extends Door implements IAlarm {
  public alert() {
    console.log('AlarmDoor');
  }
}
class Car implements ILight {
  public alert() {
    console.log('Car');
  }

  public lightOn() {
    console.log('light on');
  }

  public lightOff() {
    console.log('light off');
  }
}

class Points {
  public x: number = 1;
  public y: number = 1;
}
interface IPoints3d extends Points {
  z: number;
}

const point: IPoints3d = {
  x: 10,
  y: 20,
  z: 10,
};

console.log(point);

interface Counter {
  interval: number;
  reset(): void;
  (start: number): string;
}

let getCounter = ((start: number) => {
  return '123';
}) as Counter;
getCounter.interval = 123;
getCounter.reset = function () { };

let counter: Counter = getCounter;

console.log(counter);

/**
 * @description 泛型
 */
interface ILengthWise {
  length: number;
}
function createArray<T, U extends ILengthWise>(length: number, value: T, t?: U): Array<T> {
  const result = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let genericsArray = createArray(3, 6, []);

genericsArray.push(1);

console.log(genericsArray);

interface IGenericsInterface<T, U> {
  name: T;
  count: U;
  age: T|U;
  func: <L = string>(start: L) => L;
}

let iGenericsInterface: IGenericsInterface<string, number> = {
  name: '1',
  count: 1,
  age: '1',
  func: (start: any) => start,
};

console.log('iGenericsInterface', iGenericsInterface);

export default 1;
