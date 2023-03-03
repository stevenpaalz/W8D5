// function sum() {
//     let args = Array.from(arguments);
//     let sum = 0;
//     args.forEach((el)=>{sum += el});
//     return sum;
// }

// function sum(...args){
//     let sum = 0;
//     args.forEach((el)=>{sum += el});
//     return sum;
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// Function.prototype.myBind = function(ctx) {
//     let bindArgs = Array.from(arguments);
//     let that = this;
//     return function(){
//         let callArgs = Array.from(arguments);
//         allArgs = bindArgs.slice(1).concat(callArgs);
//         that.apply(ctx, allArgs);
//     }
// }

// whateverfunction.call(ctx, arg1, arg2,...)
// whateverfunction.apply(ctx, [args])

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     let that = this;
//     return function(...callArgs) {
//         allArgs = bindArgs.concat(callArgs);
//         that.apply(ctx, allArgs);
//     }
// }

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

//   function curriedSum(numArgs){
//     const numbers = [];
//     return function _curriedSum(num){
//         numbers.push(num);
//         if (numbers.length === numArgs){
//             let sum = 0;
//             numbers.forEach((el)=>{
//                 sum += el;
//             })
//             return sum;
//         } else {
//             return _curriedSum;
//         }
//     }
// }
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function(numArgs) {
//     let args = [];
//     let that = this;
//     return _curried = function() {
//         debugger
//         let newArgs = Array.from(arguments);
//         args = args.concat(newArgs);
//         if (args.length === numArgs) {
//             return that.apply(this, args)
//         }
//         else {
//             return _curried;
//         }
//     }
// }


Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    return _curried = function(...newArgs){
        args = args.concat(newArgs);
        if (args.length === numArgs) {
            return that.apply(this, args)
        }
        else {
            return _curried;
        }
    }
}

const sums = function(...arr) {
    let sum = 0;
    arr.forEach((el) => sum += el)
    return sum;
}

const curriedsum = sums.curry(3);


console.log(curriedsum(1)(2)(3));

const curriedsum2 = sums.curry(4);

console.log(curriedsum2(3)(1)(8)(10));