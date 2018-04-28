/**
 * interface duck type
 */

function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label)
}

let myObje = { size: 10, label: "size of object" };

printLabel(myObje)


// readonly
interface Point {
    readonly x: number;
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error

let ro: ReadonlyArray<number> = [1, 2, 3, 4]


/**
 * readonly vs const
最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
 */

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let a = { color: "xx", area: 1 }
    if (config.color) {
        a.color = config.color
    }

    if (config.width)
        a.area = config.width * config.width

    return a;
}

let mySquare = createSquare({ colour: "red", width: 100 });
console.log(mySquare)

// 函数类型

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch:SearchFunc;
mySearch = function(src, sub:string){
    let result = src.search(sub)
    return result > -1;
}

// 类类型 实现接口
interface ClockInterface{
    currentTime:Date;
    setTime(d:Date):any;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        if(d)
            this.currentTime = d
        else
            throw new Error("Method not implemented.");
    }

    constructor(h:number , m:number){
        this.currentTime = new Date()
    }
}
