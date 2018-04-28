
'use strict'
let isDone: boolean = false

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name: string = 'xx';
name = "yyy"

// 字符串模板

let sentence:string = `
    hello my name is ${name}

    and it support mulitline
`
console.log(sentence)

// 数组

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3]

// 枚举

enum Color{RED,BLACK}
let c = Color.RED
console.log(c)

// any


