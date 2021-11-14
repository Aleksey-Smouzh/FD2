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
// var funct2 = function(){
//     for (var i = 2; i < 5; i++){
//         console.log('1', i)
//     }
//     console.log('2', i);
// }
// funct2();

//________________________________________________________________

// let  arr = [60, 50 ,60, 58, 60 ,70 , 48];

// //let array = arr[1];

// console.log(arr[0])

// let arraystrock = ['hjfgjgh', "12345", 'jhgwjg', 'gejgwwfe',['hffnjd', 'unnf' ]];
// let ari = arraystrock[1]
// console.log(ari)

// arraystrock[1] = "kadabra"; // замена по индексу/ключн массива
// arraystrock[0] = "kadab";
// let  namBuba = arraystrock.length;
// console.log(arraystrock)

// function makePhrase() {
//     let  word1 = [ '24/7', 'каждый день', 'сегодня', 'постоянно', ];
//     let  word2 = [ 'мы', 'команда', 'компания', 'сотрудники', 'персонал'];
//     let  word3 = [ 'работаем не прикладая рук', 'отдыхаем на работе', 'делаем чудиса', ];

// let rand1 = Math.floor(Math.random() * word1.length);
// let rand2 = Math.floor(Math.random() * word2.length);
// let rand3 = Math.floor(Math.random() * word3.length);
// let phrase = word1[rand1]+ ' ' + word2[rand2] + ' ' + word3[rand3];
// console.log(phrase)
// }
// makePhrase();
//_________________________________________________________________________________________________________________
//let userInfo = new Object(); //синтаксис и конструктор объекта
// let userInfo = {   //литерал объекта
//     name: "Вася",
//     age: 30,
//     "liks Javascript": true
// }; 
// console.log(userInfo);
// console.log(userInfo.age);
// console.log(userInfo['name']);
// console.log(userInfo["liks Javascript"]);

//_____________________________________________

// let firstPart = 'likses';
// let userInfo = { 
//     name: 'Вася',
//     age: 30,
//     [firstPart]: true,
// };
// console.log(userInfo[firstPart]);
// console.log(userInfo['name']);

// приемущуество квадратных скобок
//let key = "name";
//console.log(userInafo[key]);
//_________________________________________
//вложенность

let userInfo = {
    name: "Вася",
    age: 30,
    adrees: {
        sity: 'Minsk',
        sreet: "freedom",
    }
};
console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo.adrees);
console.log(userInfo.adrees.sreet)