/**
 * 
 * ts 有多种基础类型
 * any
 * number  双精度64位浮点值， 可表示整数和分数
 * string 
 * boolean
 * 
 * 
 */

 // 数组

 let arr: number[] = [1,2];

 // 泛型
 
 let arr2: Array<number> = [1,2];

 console.log(arr.concat(arr2))

 // 元组

 let x :[string,number];
 x = ['test',2];
 console.log(x[0])

 // 枚举

 enum Color{r,g,b}
 let c: Color = Color.b;
 console.log(c)
 

