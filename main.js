'use strict';

/* 
// number, string, boolean, null, undefined //이것들을 제외한 모든 것은 object
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// object - 변수와 달리 내용이 ref(레퍼런스)안에 저장됨.
// let obj = {
//   name: 'ellie',
//   age: 5,
// };
// console.log(obj.name); //obj.name : ref 안에서 name의 내용을 불러옴

// let obj2 = obj; //obj2에 obj의 ref가 복사됨
// console.log(obj2.name);

// obj.name = 'james';
// console.log('--------');
// console.log(obj.name);
// console.log(obj2.name);

let a = 2; //let은 변경가능
a = 5;
a = 9;

const num = 2;
// num = 4; //error. const는 변경 불가능
// object의 경우에도 마찬가지. 자체의 ref 변경이 불가능하다
const obj = {
  name: 'ellie',
  age: 5,
};
obj.name = 'James'; //⭐️but, ref 내의 내용은 변경 가능!!!
console.log(obj.name);
*/

/* 함수
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num, num2) {
  return num + num2;
}
const sum = add(3, 4);
console.log(sum);
*/

/*
// 함수도 object처럼 ref가 생성되고, '함수명'안에 해당 ref가 할당됨.
function add(num1, num2) {
  return num1 + num2;
}
// add에 ref({})가 할당됨

function print() {
  console.log('print');
}
print(8, 33);
// 아무런 인자를 받지 않는 함수는 호출시 인자를 적더라도 받지 않음.

const doSomething = add;
// doSomething에 add의 ref가 복사됨(같은 함수를 가리키고 있다)

const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2);
*/

/*
function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) {
  const result = operator(2, 3); // add(2, 3)
  console.log(result);
}

surprise(divide);
*/

/*
// false: 0, -0, '', null, undefined
// true: -1, 'hello', [], 'false
let obj = {
  name: 'ellie',
};
if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name); //obj가 있다면 name에 접근
*/

// ⭐️클래스를 만들 때 모두 완성된 완전체로 만들기보다는
// 레고를 조립하듯 원하는 기능을 끼워맞춰서 재조립이 가능하도록 만드는 것이 좋다
// -> 콜백함수 사용!⭐️
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // class내에서는 함수를 작성할 때 function이라고 작성하지 않아도 됨
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

const coolCounter = new Counter(alertNum);

function printSomething(num) {
  console.log(`yo! ${num}`);
}

function alertNum(num) {
  alert(`yo! ${num}`);
}
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
for (let i = 0; i < 50; i++) {
  coolCounter.increase();
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);