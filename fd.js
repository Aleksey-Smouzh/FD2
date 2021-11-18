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

let calculator = {
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
  readValues: function () {
    this.a = +prompt("первое число a?", 0);
    this.b = +prompt(" второе число b?", 0);
  },
};

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



let people = {
    eats: true,
    flye: false
  };
  
  function man (flye) {
    this.name = name;
    this.flye = flye;
  }
  
  man.prototype = people;
  let superman = new man("white Rabbit");
  let superman1 = new man ("неа не уммет");
  
  alert(superman1.flye);
  