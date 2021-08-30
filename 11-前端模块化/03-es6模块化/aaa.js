let name = "小明";
let age = 18;
let flag = true;

function sum(a, b) {
  return a + b;
}

const moduleA = {
  flag,
  name,
  age,
  sum
};



// 1. 导出方式一
export {
  name,
  age,
  flag,
  sum,
};

// 2. 导出方式二
export const num1 = 100;
export const num2 = 200;

export function add(a, b) {
  return a + b;
}

export class Person{
  run() {
    console.log('run!run!');
  }
}

// 3 export default
// 某些情况下，一个模块中包含的某个功能，我们并不希望给这个功能命名，而是让导入者可以使用自己来命名
// 同一个模块中只能有一个default, import的时候名字可以随便取
// const address = '冬木市';

// export default address;

export default function(name) {
  console.log(name);
}