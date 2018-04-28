// Named function
function add(x, y) :number{
    return x + y;
}

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}


// Anonymous function
let myAdd = function(x: number, y: number):number { return x + y; };

// 完整形式
let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

 