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

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     adrees: {
//         sity: 'Minsk',
//         sreet: "freedom",
//     }
// };
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo.adrees);
// console.log(userInfo.adrees.sreet)

//_______________________________________
//свойство из переменной

// function makeUserInfo() {
//     let a = 5;
//     let b = 5;
//     let z = b + a;
//     return {
//         a,
//         b,
//         z,
//     };

// }
// let user = makeUserInfo();
// console.log(user);

// function grizli(){
// let a = 1;
// let t = 2;
// let c = a + t;
// let v = (a + c) * t;
// return{

//     v,
// };

// }
// let pizli = grizli();
// console.log(pizli);
//___________________________________________

//____________________________________

// Изменения  обекта бб
// добавление свойства
// удаление свойства
// let userInfo = {
//   name: "Вася",
// };

// console.log(userInfo);

// userInfo.age = 30;

// console.log(userInfo);

// userInfo["liks javacsript"] = true;

// console.log(userInfo);

// userInfo.address = {
//   sity: "Minsk",
//   strit: "Fridom",
// };

// console.log(userInfo.address);

// let infoUser = {
//   live: "Minsk",
//   ["was born"]: "Chirchiq",
// };
// console.log(infoUser);
// delete infoUser.live;

// console.log(infoUser);

// delete infoUser["was born"];

// console.log(infoUser);

// infoUser.name = "Bobi";
// console.log(infoUser);

// infoUser.car = "bugati verona";
// infoUser.cat = "mi mi";
// infoUser.name = "Vasya";
// console.log(infoUser);

// delete infoUser.cat;

// console.log(infoUser);
// infoUser.cat = "mima";

// console.log(infoUser);

// infoUser.cat = "pima";

// console.log(infoUser);

//__________________________________________

//Изменение свойсв объекта даже в констаньтею

// const userInfo = {
//     name: 'Vasia',
//     age: 30,

// }
// console.log(userInfo);

// userInfo.age = 18;
// userInfo.name = "vita"
// userInfo.sity = "grodno"

// delete userInfo.name

// userInfo.name = "Vova"
// console.log(userInfo)

//____________________
//Копироване обекта (сам объект не ндублируеться)

// let userInfo = {
//   name: "Vova",
//   age: 29,
// };

// console.log(userInfo);
// let user = userInfo;
// console.log(user);
// userInfo.name = "dima";

// console.log(userInfo);

// function name() {
//   console.log(this);
// }

// --------------------------------
//_________16.11.21
//__________калюкулятор

// let calculator = {
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
//   readValues: function () {
//     this.a = +prompt("первое число a?", 0);
//     this.b = +prompt(" второе число b?", 0);
//   },
// };

//calculator.readValues();
//alert (calculator.sum());
//alert (calculator.mul());

//_____________________________________________________//////

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this
//   },
//   down() {
//     this.step--;
//     return this
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//     return this
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().down().showStep(); // 1

// function User (name, admin, ){
//     this.name = name;
//     this.admin = admin;
//     // alert (this.name + " / " + this.admin);{

//     // }
//     this.show = function (){
//         return this.admin
//         alert (this.name + " / " + this.admin);{

//              }
//     }

// }
// let user1 = new User ('Mark', true,);
// let user2 = new User ('Miki', 'false');

// console.log(this.admin)

// user1.show();
// user2.show();

// function People (_nameSity, count) {
//     this._nameSity = nameSity;
//     this.count = count;
//     this.show = function () {
//         alert (this._nameSity + " / " + this.count);
//         return this.count

//     }
// }
// let sity1 = new People ("polack" , 100500)
// let sity1 = new People ("nowpolack" , 100501)

// sity1.getCount();

//______________________шаблон для дз 5
// const animals = [{name: "", color: "", age: "", voice: '' }, { name "", color}]

// class animals {
//     constructor(name. color, age, voise ) {}

//     say() {

//     }
//  function animalFarm(animals) {

//     const newAnimals = animals.map ((animal) => )
//  return objecetAnimals
// }

// }
//__________________________
// const vawels = ['a', 'e', 'и']
// const getCount = (string) => {
//     return (vowels) => {
//       const array = string.split('');
//       const count = array.reduce ((sum, item) => sum + vawels.includes(item), 0);
//       return count;
//     };
// };

// console.log(getCount('Привет') ());

//____________________________________________________

// let animal = {
//     eats: true,
// };
// let rebbit = {
//     jamps: true
// };

// rebbit. __proto__ = animal;
// alert (rebbit.eats);
// alert (rebbit.jamps);

//_______________________________

// let pet = {
//     eats: true,
// };
// let dog = {
//     jamps: true
// };

// dog. __proto__ = pet;
// alert (dog.eats);
// alert (dog.jamps);

//_____________________________________

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walk');
//     }
// };
//  let rabbit = {
//  jumps : true,

//  __proto__: animal,
//  };

//  let longEre = {
//      earloength: 10,
//      __proto__: rabbit
//  };

//  rabbit.walk();
//_______________________________________________

//  let animal = {
//      eats: true,
//      };
//      let rabbit = {
//          jamps: true
//      };

//      for(let prop in rabbit) {
//          let isOwn = rabbit.hasOwnProperty(prop);

//          if (isOwn) {
//              console.log(`Our; ${prop}`);
//          } else {
//              console.log(`inherited; ${prop}`);
//          }
//      }

//_________________________________

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit("white Rabbit");
// let rabbit1 = new Rabbit("Blek Rabbit");

// alert(rabbit1.eats);

//_______________________________________________

// let people = {
//   eats: true,
//   flye: false,
// };

// function man(flye) {
//   this.name = name;
//   this.flye = flye;
// }

// man.prototype = people;
// let superman = new man("white Rabbit");
// let superman1 = new man("неа не уммет");

// alert(superman1.flye);

//_______________________________________________

//let getSomeAge = () => {
//   return 100;
//};

// function superMan (getSomeAge) {
//     this.getSomeAge = getSomeAge;
// }
// superMan.prototype = getSomeAge;
// let superMario = new superMan('bingo')

// alert(superMan(getSomeAge));

//function User () {

//}
//User.prototype.getSomeAge = getSomeAge;
//const.user = getSomeUser

//"Приет".getVowels()

//_________________MAP & FILTER_______________________

// let a = [4, 5, 12, 200, 1, 0, -2];

// let b = a.map(function (item, index) {
//   console.log(item);
//   return item * 5;
// }); //новый масив куда будет складываться результат операции
// // function () ананимная функция которая будет применяться
// // к каждому элементу данного масива и результат выполнения
// // будет записываться в переменную "b".
// // return item перебрал масив "а" и по очериде вернули в масив "b",
// console.log(b);
// /* есть функция котороая написана внутри "map" эта функция
// применяеться по очереди к каждому элементу "а"  то что возвратит
// return item то попадет в масив "b" если ничего не вернет то будет
// undefined */
// /* Если в масиве А лежит 5 элементов то и в масиве Б будет 5
// элементов вункция будет запускаться столько раз сколько элементов в масиве */
// //________________________________________________________

//______________пределка в стрелочную функцию ________________

// let z = [4, 5, 12, 200, 1, 0, -2];

// let y = a.map((item, index) => {
//   //console.log(item);
//   return item * 5;
// }); //новый масив куда будет складываться результат операции
// // function () ананимная функция которая будет применяться
// // к каждому элементу данного масива и результат выполнения
// // будет записываться в переменную "b".
// // return item перебрал масив "а" и по очериде вернули в масив "b",
// console.log(b);
// /* есть функция котороая написана внутри "map" эта функция
// применяеться по очереди к каждому элементу "а"  то что возвратит
// return item то попадет в масив "b" если ничего не вернет то будет
// undefined */
// /* Если в масиве А лежит 5 элементов то и в масиве Б будет 5
// элементов вункция будет запускаться столько раз сколько элементов в масиве */

//_______________________________________________

//__________________FILTER_________________________

// let v = [4, 5, 7, 8, 111, 555];

// let x = v.map(function (item) {
//   return item;
// });

// let c = v.filter(function (item, index) {
//   if (item > 0) {
//       return true;
// //   } else {
// //       return false
//   }
// });
// console.log(c);

//_________________________________________________
//_______________ function + return_____________________________________

// function f1(x, y) {
//   // const x = 5;
//   // const y = 6;
//   //   console.log(x + y);
//   let sum = x + y;
//   return sum;
// }

// f1(4, 5);
// f1(4, 45);

// function f2() {
//   //console.log(2);
//   return 5;
// }
// f2();
// console.log(5 + f2());
// console.log(11 + 1 + 5 + f1(4, 5));

// function f4(r, z) {
//   return r + z;
// }
// f4(4, 5);
// f4(4, 45);

// function f5() {
//   //console.log(2);
//   return 15;
// }
// f5();
// console.log(5 + f5());
// console.log(f4(1, 0) + f1(4, 5));

// //____________________________________________
// //_____-функция которая вычисляет случайное целое число

// function randInt(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// let m = randInt(222, 333);
// console.log(m);
// console.log(randInt(222, 333) + 200);
// //________________________________________________

// // выводит куда угодно
// console.log(f1(100, 200));
// document.querySelector(".out-1").textContent = f1(300, 400);
// document.querySelector(".out-1").style.background = "rgb(73,356,907)";
// document.querySelector(".out-1").style.background = `rgb(${randInt(
//   0,
//   255
// )},${randInt(0, 255)},${randInt(0, 255)})`;
// //alert(f1(3, 4));
// // используеться в вырожениях
// console.log(100 * f1(3, 4));

// //вывод данных введенных подбзлвателем inputting date entered by the user
// document.querySelector(".b-3").addEventListener("click", function () {
//   const s = document.querySelector(".i-3").value;
//   document.querySelector(".out-3").innerHTML = "Hello " + clearText(s);
//   console.log("Hello " + clearText(s));
// });
// function clearText(data) {
//   return data.trim().toLowerCase();
// }
// //_________________________________________________________________________
// //__________________-прирывание функции____________________________________

// function t7() {
//   console.log(1);
//   return;
//   console.log(2);
//   console.log(3);
// }
// t7();

// //______________________эмулируем indexOf_________________________________
// function indexOfEmul(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) return i;
//   }
//   return -1;
// }
// let result = indexOfEmul([22, 33, 44, 55], 33);
// console.log(result);

// //___________________________________________________________________
// // пользователь ввооодит количество лет

// document.querySelector(".b-4").addEventListener("click", function () {
//   let year = +document.querySelector(".i-4").value;
//   if (isNaN(year)) return;
//   if (year <= 0 || year > 140) return;
//   document.querySelector(".out-4").innerHTML = 2021 - year;
// });
// //______________________________________________________
// //_____пример :5 сумма___________________________________

// console.group("example 5");
// const arr5 = [
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// function t5() {
//   let n = 0;
//   for (let i = 0; i < arr5.length; i++) {
//     n += sum(arr5[i]);
//   }
//   console.log(n);
// }
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// t5();
// console.groupEnd();

// //_____________________________________________
// // _________________пример 6 return ';'___________________
// //                   с переносом строки
// console.group("exampe 6");
// function t7() {
//   let g = 88;
//   return g; // перенос returnна другую строчку вызывает ошипку НО можно сдлеать через скобки return (gijojijjio ijxivj) и переносить строку//
// }
// console.log(t7());
// console.groupEnd();

// //__________________________________________________

// console.groupEnd("exmple 7");
// const arr7 = [
//   [3, 4, 5],
//   [6, 7, 8],
//   [7, 7, 1],
//   [2, 2],
//   [3, 2],
// ];

// const evenArr7 = arr7.filter(function (item) {
//   return sum(item) % 2 === 0;
// });
// console.log(evenArr7);
// console.groupEnd();

// // _______________________________________
// // ___________ return function________________

// function t8() {
//   return sum;
// }

// let s = t8();
// console.log(s([10, 20, 30]));

//_______________________________________________
//_____________-массивы__________________________

let a = [1, 2, 3, 4,];
console.log(a)

let t = a[0]; // условно времменная переменная
a[0] = a[3];
a[3] = t;
console.log(a);

let z = [9, 8, 7, 6];
console.log(z);

let p = z[1];
z[1] = z[3];
z[3] = p;
console.log(z);