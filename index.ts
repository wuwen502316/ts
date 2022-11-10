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
