                        /*      Narrowing       */
// function fun0(arg: number, b:number):number{
//     return arg+b
// }
// console.log( fun0(2,4))

// let namedd : string | number;

// type name11<t> =     {
//     name : string;
//     value : t
// }

// let obj: name11<number> {

// }
interface Car {
    weels: number;
    color: string;
}

let obj: Car = {
    weels : 4,
    color : "red"
}
interface SportCar extends Car {
    speed : number ;
    owner? : string ;
}

let obj2:SportCar = {
    weels : 4,
    color : "red",
    speed : 0
}
interface Car2 {
    speed : number;
}
let x:string | number;

// function fun1(obj: SportCar & { link : string} ){
    
// }

/*  Tyuthiness narrowing    */

// function Narrowing(obj:SportCar){
//     if(obj.weels){
//         return `Value of Weels ${obj.speed}.`
//     }
//     return `not found!!`
// }
// console.log(Narrowing(obj2))

/*  Equality narrowwing     */

// function Narrowing(x:string|number , y :string|boolean){
//     if( x === y){
//         return `x = ${x.toUpperCase} \n y = ${y.toUpperCase}`
//     }
//     else{
//         return `x = ${typeof x}`
//     }
// }/ function fun1(obj: SportCar & { link : string} ){
    
// }
// console.log(Narrowing("10" , "ded"))

/*   the `in` Opreator */ 

// function Narrowing(obj:Car2 | Car){
//     if("weels" in obj){
//         return `Value of Weels ${obj.weels}.`
//     }
//     else if("speed" in obj){
//         return `Value of Weels ${obj.speed}.`
//     }
//     return `not found!!`
// }
// console.log(Narrowing(obj2))

/*  instanceof narrowing    */

// function Narrowing(obj:Car2 | Car){
//     if(obj instanceof Object){
//         if("weels" in obj){
//         return `Value of Weels ${obj.weels}.`
//         }
//     }
//     // else if("speed" in obj){
//     //     return `Value of Weels ${obj.speed}.`
//     // }
//     return `not found!!`
// }
// console.log(Narrowing(obj2))

/*  Assignments Narrowing */

// x =1;
// console.log(x);
// x = "string"
// console.log(x);

/*  Control flow analysis   */

// function padLeft(padding: number | string, input: string) {
//     if (typeof padding === "number") {
//       return  padding = 1;          // remove return and then check type
//     }
    
//     return padding;     
//   }

/*  Exhaustiveness checking     */