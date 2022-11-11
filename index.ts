type GenericIdentityFn<T,K,L> = {
    (index:T,index1:K):L//匹配：有两个参数且参数的type为T,K，且返回值的泛型是L的函数
}
// eg:
// const fn = function<string,number,boolean>(arg1,arg2):boolean{
//     return L即布尔值boolean
// }
// fn(arg1,arg2);//fn只有两个参数，且第一个参数必须为string,第二个参数必须是number类型。返回值为布尔值



var g:GenericIdentityFn<string,number,string> = function<T,K>(arg:T,val:K):string{
  const nameAndAge:string = `我的名字是${arg}，今年${val}岁`;
  return nameAndAge
}
g("Tom",18)//我的名字是Tom，今年18岁

var a1:GenericIdentityFn<number,number,string> = (name:number,age:number):string => {
  const _symbol = name > age ? "大于" : "小于";
  return `${name}${_symbol}${age}`
}

// 2022-11-11
// 普通的string | number | boolean | Function | object等等基础类型
type A = string;
const a:A = "12323";

/*--------------------分割线---------------------------*/

// 数组的几种方法
// Array_1
type B = Array<string | number>;
const  b:B = [1,3,"s"];

// Array_2
type B1 = (string | number | boolean)[];
const b1:B1 = ["s",1,2, true]

// Array_3
type B2 = string | number | boolean[];
//const b2:B2 = ["s"]//Type 'string' is not assignable to type 'boolean'.
const b21:B2 = [true,false,false];const b22:B2 = 'sssss';const b23:B2 = 1;

// Array_4
type B3 = [string,number,Function,boolean];
//const b3:B3 = ["1"]//Type '[string]' is not assignable to type 'B3'.  Source has 1 element(s) but target requires 4
const b31:B3 = ["1",2,function(){},false]//必须是依次为泛型的类型

// Array_5
type B4 = Array<string | number | boolean>;
const b4:B4 = [1,"2",false,4]//该泛型不限制数组元素的个数，但限制元素的类型

// Array_6
type B5 = {
  [index:number]:string
}
// const eg:B5 = [1] //Type 'number' is not assignable to type 'string'.
const b5:B5 = ["s"]

//Array_7
type B6 = {
  [i:string]:number
}
const b6:B6 = {name:1}

/*--------------------分割线---------------------------*/

// 对象object
// object_1
type C = {//规定了对象，且必须包含name, age, say字段,或多或少都不行
  name: string,
  age: number,
  say: Function
}
const c:C = {
  name: "name",
  age: 1,
  say: function(){}
}

// object_2
type Obj = object;
const obj_1:Obj = {};const obj_2:Obj = {name:"1"}//and so on
const obj_11:Obj = [];const obj_12:Obj = function(){}



// 函数Fucntion
type Func<T, K, V> = {// <type类型> 函数包含两个参数,且参数类型必须为T, K类型，且函数的返回值必须为类型V
  (arg1:T, arg2:K):V
}
const d:Func<string,number,boolean> = function(name:string,age:number):boolean{
  console.log(`my name is ${name},${age} yeaes old`);
  return age > 15;
}

const arrProps = ['name', "age", "sex", "address", "school"];
type E = typeof arrProps;//string[];任意元素都可以，但必须是string类型
const Person:E = ['1']
const arrProps1 = ['name', "age", "sex", "address", 1, function(){}];
type E1 = typeof arrProps1;// type E1 = (string | number | (() => void))[]




// type F = {keyof arrProps}









