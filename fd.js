// var number = 33;
// console.log(number)
// function getNumber(){
//     var number = 22;
// console.log(number);

// }
// getNumber();
//-------------------

// var weight = 1;
// if (weight == 1 ) {
//     let kilograms = `вес ${weight} кг`;
//     console.log(kilograms)
// }

//_____________________________________

// let speed = 60;
// var shtraf = false;

// if (speed > 50) {
//     var shtraf = true;
// }

//__________________________________
// let speed = 60;
// let car = "tesla"

// speed = 40;
// car = 'nissan'
// console.log(car)
//___________________________________

// const car = {
//     name: "tesla",
//     color: 'red'
// };
// console.log(car);
// car.name = 'ford'

/*  Глобальная область видимости 
1/ из текущей -> родительскач область видимости -> глобальной */

// let a = 10;
// let b = 5;
// let c = 15;
// let add5 = function (number) {
//   console.log("1", number / a);

//   let add10 = function (number2) {
    
//     console.log("2", number2 + c);
//   };
//   add10(3);

//   let add15 = function (number3) {
//     console.log("3", number3 * b);
//   };
//   add15(3);
// };
// add5(3);
//________________________________________________________________
var funct2 = function(){
    for (var i = 1; i < 5; i++){
        console.log('1', i)
    }
    console.log('2', i);
}
funct2();