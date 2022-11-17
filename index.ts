

//在线练习typeScript的 URL:https://www.typescriptlang.org/zh/play?#code/C4TwDgpgBAYgdgYygXigCjgQwLYQFwDOwATgJZwDmANFJhfnAK7YBGExAlCgHzqaEly1Fniat2XZLzgQAbuwDcAKCWhIsFFADeSqHwFlKVEWLac8UWQHtSAE2UBfVeGgwAjJp16MOfEUPUdAzMZhwWMEpOSgA2EMBQAGZwePBIqAmMiMCkVnA+uFRBHF5QxHGMxHCJmQjZuWiYxsW6eqXllVBuLU5RSWgARG79VABMHANDoxwKQA
// https://blog.csdn.net/huangfengnt/article/details/124734974       --- ts当中的infer关键字
// https://www.jianshu.com/p/707a304d7752      ---- TS进阶之infer
// https://blog.csdn.net/lcl130/article/details/125214788          ---- ts的keyof
// http://www.icodebang.com/article/329962          ------ ts中的几个关键字
// https://blog.csdn.net/yanzi_0216/article/details/115209363?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-115209363-blog-119850296.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-115209363-blog-119850296.pc_relevant_aa&utm_relevant_index=1                  ------------ TS 中的 keyof 和 typeof 操作符_yanzi_0216的博客-CSDN博客_ts typeof 

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
  [index:number]:string//index:number表示无论是[]还是{}，匹配的对象的索引必须是number
}
// const eg:B5 = [1] //Type 'number' is not assignable to type 'string'.
const b5:B5 = {
  1:'s'//索引为1即index
}
const b51:B5 = ["s"]//索引为0即index

//Array_7
type B6 = {
  [i:string]:string
}
const b6:B6 = {1:"ss"}



// test测试以下情况[{id:1,name:"job"},{id:2,name:"john"}]怎么匹配
type TEST = {
  id:number,
  name:string
}[]
const test:TEST = [{
  id:1,
  name:"john"
},{
  id:2,
  name:"命"
},{
  id:3,
  name:"号"
}]

type NumberArr = number[];const numberArr:NumberArr = [1,2,3];
type StrNumArr = (number | string)[];const strNumArr:StrNumArr = [1,2,"sdfsf"];

type Subjuct = "_Math" | "_Chinese" | "_English" | "_History";
interface objOf_indexOfNumOrStr_valOfArrOrStrOrNum{
  id:number,
  message:{
    name:string,
    sex:string,
    score:{[index in Subjuct]:number},
    arr:(string | number)[]
  }
}
const objTest:objOf_indexOfNumOrStr_valOfArrOrStrOrNum = {
  id:1,
  message:{
    name:"job",
    sex:"boy",
    score:{
      _Math:120,
      _Chinese:120,
      _English:100,
      _History:80
    },
    arr:[1,2,"s"]
  }
}

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

type Func1 = {
  (i:string):number//此处小括号用于函数，[i:type]:type用于对象{}
}
const func:Func1 = function(a:string):number{
  if(a){}
  return 1
}

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









type Te = {
  name:string,
  age:number
}
type Tests = keyof Te;
type Tes = {
  [index in Tests]:string
};


var tes:keyof Te = "age"



/*总结
 * 1、is 类型保护，用于判断类型的函数中做类型限制
 * 2、in 类似于js的遍历
 * 3、keyof 可以获取一个对象接口的所有 key值，比如keyof Array获取的是数组prototype上原型链的各种方法；keyof Object获取对象的键值对的属性集合
 * 4、typeof 用于获取某个变量的具体类型  eg:var A = {name:"1",age:12};type B = typeof A ;  ===>>>> type B = {name:string,age:number}
 * 5、extends用于接口与接口、类与类、接口与类之间的继承
 * 6、implements用于类与类、类与接口之间的实现
 * 注意： extends类似于es6的extends，implements没有继承效果的，但是要求子类上必须需有父类的属性和方法，更倾向于限制子类的结构！
 
 * 7、type 和 interface的区别
     *  7-1、 type可以定义单个变量类型、联合类型、对象，interface只能定义对象；
     *  7-2、 type可以使用implements,但是不可以使用extends关键字,interface两者都可以使用;
     *  7-3、 type不可以重复声明，interface可以重复声明(声明合并);
     *  7-4、 type可以动态计算属性，interface则不可以
  
 * 8、infer用于提取属性,具体的返回类型是依据三元表达式的返回而定。
 
    type Fnc = (name:string, age:number) => (a:string,b:number) => void;
    // 等价于
    // type Fnc_1 = {
    //   (a:string, b:number): void
    // }
    // type Fnc_2 = {
    //   (name:string, age:number): Fnc_1
    // }

    type getFucReturn<T> = T extends (a:any, b:any) => infer U ? U : T;

    type s = getFucReturn<Fnc>;
    // 等价于type s = getFucReturn<Fnc_2>
    let fn1:s = function(a,b){
      return 1
    }
    fn1("1",2)
 
 
 * 9、Pick用于在定义好的类型中取出特性的类型
 
 * 10、Record 可以获得根据 K 中所有可能值来设置 key 以及 value 的类型
 
 * 11、ReturnType 用来获取函数的返回值的类型
 
 * 12、Partial、DeepPartial、Required
    *   12-1：Partial 功能是将类型的属性变成可选
  
 * 参考：http://www.icodebang.com/article/329962
 */


type A<T> = T extends Array<infer U> ? U :T;

let a:A<string> = "Sdfsdf";// ===>>>type A<string> = string
// 注释：infer U 等价于 未知数 \ Array<infer U> 等价于 Array<未知> 也等价于 未知[]
// A<string> = T extends Array<未知infer U> ? 未知 U : T
let b:A<[string]> = "1"

// type StrArr = [string];let arr:StrArr = ["1","s"]会报错。 因为 type StrArr只能支持 只有一个元素的数组








