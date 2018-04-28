class Base{
    baseValue:number  =1
    private _fullName: string;

    get fullName():string{
        return this._fullName
    }

    set fullName(newName:string){
        this._fullName = newName
    }

    constructor(public baseValue2:number){
        console.log("base constructor")
    }

    print() {
        console.log(this.baseValue, this.baseValue2)
    }
}

class Sub extends Base{

    baseValue:number = 2

    constructor(){
        super(111)
    }
 
}

let base = new Base(2)
base.print()
let sub = new Sub()
sub.print()

if(!base.fullName)
    base.fullName = "xxx"

console.log(base.fullName)
console.log("*******")

class Grid{
    static origin = {x:0, y:0}
    calcDistanceFromOrigin(point:{x:number; y:number}){
        let x = point.x - Grid.origin.x;
        let y = point.y - Grid.origin.y;
        return Math.sqrt(x * x + y * y) / this.scale;
    }

    constructor(public scale:number){}
}

let g1 = new Grid(1.0);
let g2 = new Grid(5.0)
console.log(g1.calcDistanceFromOrigin({x:10, y:10}))
console.log(g2.calcDistanceFromOrigin({x:10, y:10}))

Grid.origin.x = 100;
Grid.origin.y = 100;
console.log(g1.calcDistanceFromOrigin({x:10, y:10}))
console.log(g2.calcDistanceFromOrigin({x:10, y:10}))


// 抽象类
abstract class Animal{
    abstract makeSound():void;
    move():void{
        console.log('xxx');
    }
}

