// 配列の数字を10倍にするmap関数をcallbackで記述

// function map(array:number[], callback:(value: number) => number ):number[] {
//   const result: T[] = [];
//   for (let i of array) {
//     result.push(callback(i))
//   }

//   return result;
// }

// const data = [1,1,2,3,5,8,13];

// const result = map(data,(x)=>x*10);//[10,10,20,30,50,80,130]と表示される

// console.log(result);

// mapに渡す配列、mapから帰ってくる配列の型を固定しない
function map<K, T>(array: K[], callback: (x: K) => T): T[] {
  const result: T[] = [];
  for (let i of array) {
    result.push(callback(i));
  }

  return result;
}

const data = [1, -3, -2, 8, 0, -1];

const result: boolean[] = map<number, boolean>(data, (x) => x >= 0);

//[true,false,false,true,true,false]と表示される
console.log(result);
