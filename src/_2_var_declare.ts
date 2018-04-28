/**
 * let 使 var 的作用于变正常
 * 
 * const 定义常量
 */

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        // console.log(i)
    }, 100*i);  
}

/**
 * 解构
 */
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

[first, second] = [second, first]
console.log(first); // outputs 1
console.log(second); // outputs 2

// ...rest
let [f1, ...rest] = [1, 2, 3, 4];
console.log(f1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// 忽略元素
let fourth : number
[, second, , fourth] = [1, 2, 3, 4];
console.log(second, fourth)

/**
 * 对象解构
 */

 