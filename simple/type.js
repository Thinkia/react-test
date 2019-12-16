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
var arr = [1, 2];
// 泛型
var arr2 = [1, 2];
console.log(arr.concat(arr2));
// 元组
var x;
x = ['test', 2];
console.log(x[0]);
// 枚举
var Color;
(function (Color) {
    Color[Color["r"] = 0] = "r";
    Color[Color["g"] = 1] = "g";
    Color[Color["b"] = 2] = "b";
})(Color || (Color = {}));
var c = Color.b;
console.log(c);
