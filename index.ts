type GenericIdentityFn<T,K,L> = {
    (index:T,index1:K):L
}


var g:GenericIdentityFn<string,number,string> = function<T,K>(arg:T,val:K):string{
  const nameAndAge:string = `我的名字是${arg}，今年${val}岁`;
  return nameAndAge
}
g("Tom",18)

var a1:GenericIdentityFn<number,number,string> = (name:number,age:number):string => {
  const _symbol = name > age ? "大于" : "小于";
  return `${name}${_symbol}${age}`
}
