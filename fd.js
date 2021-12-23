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

// let a = [1, 2, 3, 4,];
// console.log(a)

// let t = a[0]; // условно времменная переменная
// a[0] = a[3];
// a[3] = t;
// console.log(a);

// let z = [9, 8, 7, 6];
// console.log(z);

// let p = z[1];
// z[1] = z[3];
// z[3] = p;
// console.log(z);

// let a = ["боклажан", 1, [5], 9, "мармилад"];

// console.log(a);
// let z = a[0];
// a[0] = a[2];
// a[2] = z;
// console.log(a);

// let b = [4, 6, 3, 1, 5, 2];

// let t = b[0];
// b[0] = b[3];
// b[3] = t;
// let x = b[1];
// b[1] = b[5];
// b[5] = x;
// console.log(b);
//____________________________________________
//

// document.getElementById('out').innerHTML = 'hellow';
// document.getElementById('out').innerHTML = 2019;
// document.getElementById('out').innerHTML = '<b>202</b>'

// document.querySelector('.header').innerHTML = 1981;
// document.querySelector('#one').innerHTML = 1983;
// // document.getElementById('#one').innerHTML = 1987;

// let b;
// let a = document.querySelector('#one'); //внутрь а получил пораграф
// let c; //обявление
// c = document.querySelector('.header'); // присвоение

// a.innerHTML = 9999;
// c.innerHTML = 100000;

// document.querySelector(".container").style.background = "blue";
// document.querySelector("#title").style.color = "rgb(73,356,001)";
// document.querySelector("#text").style.color = "rgb(733,356,009)";

// document.querySelector("#text_p");
// let text = document.querySelector("#text_p");
// text.style.color = "red";

// const arrey = ['#text_p1', '#text_p2']
// arrey.forEach(function(item){

// });

// const colorText = arrey [0];
// arrey = 'red';

// document.getElementsByClassName('name3').innerHTML = "Pupkin";
// document.getElementsByClassName('name').innerHTML = 'pupkin';

// const array = [
//   { name: "Yandex", href: "https://yandex.by" },
// //   { name: "Google", href: "https://google.com" },
// //   { name: "mail", href: "https://mail.ru" },
// ];

// const links = document.getElementsByTagName("a");
// const linksArray = Array.from(links);
// linksArray.forEach((item) => {
// list += `<a>$ { item }</a>`
// });
// links.innerHTML = list;

//__________________________________________________________________________
//  const lists1 = document.querySelector('.list');

//  //let t = (tag, classList) => text => `<${tag} class="${classList.join(' ')}">${text}</${tag}>`;
//  function t(tag){
//      return function(text){
//         return `<${tag}>${text}</${tag}>`;
//      }
//  }

//  let div = t('h1', ['header', 'red']);
//  let p = t('p', ['bold']);
//  let elem = div('hello');
//  let elem2 = p('some text');

//  lists1.innerHTML = elem;
//  lists1.innerHTML += elem2;

//________________________дз внизу_____________________________________

// let footer = document.createElement("footer");
// footer.className = "footer";
// document.body.append(footer);

// let footerList = document.querySelector("footer");
// footerList.style.width = "1200px";
// footerList.style.height = "150px";
// footerList.style.paddingTop = "10px";
// footerList.style.paddingBottom = "15px";
// footerList.style.color = "rgba(255, 255, 255, 1)";
// footerList.style.background = " rgba(30, 26, 26, 1)";

// let nav = document.createElement("nav");
// nav.className = "menu";

// let ul = document.createElement("ul");
// ul.className = "list";

// footerList.prepend(nav);
// nav.prepend(ul);

// const arr = [""];

// const listForFooter = document.querySelector(".list");

// let lists = "  ";
// arr.forEach((item) => {
//   lists += `<li>${item}</li> `;
// });
// listForFooter.innerHTML = lists;

// const pointOne = document.querySelector("li");
// pointOne.className = "point_home_page";
// pointOne.style.listStyleType = "none";
// pointOne.style.display = "blok";

// const arr1 = [
//   "Юридический адрес:",
//   "Республика Зазеркалье",
//   "г. Лкаморье",
//   "220013, ул. Потриса Лулумбы 123.",
// ];

// const listForFooter1 = document.querySelector(".point_home_page");

// let lists1 = "  ";

// arr1.forEach((item) => {
//   lists1 += `<p>${item}</p> `;
// });
// listForFooter1.innerHTML = lists1;

// const column2 = document.createElement("nav");
// column2.className = "columnTwo";
// column2.style.display = "flex";
// footer.append(column2);

// const columnTwoLi = document.createElement("li");
// column2.append(columnTwoLi);
// columnTwoLi.className = "fax";
// columnTwoLi.innerHTML = "8(200)778-778-78";

// const columnTwoLi1 = document.createElement("li");
// column2.append(columnTwoLi1);
// columnTwoLi1.className = "phone";
// columnTwoLi1.innerHTML = "+999(00)123-321-21";

// // const fax = document.getElementsByTagName('li');
// // fax.className = 'fax';
// // fax.innerHTML = "ybrebyxbv";
// console.log(columnTwoLi1);
// column2;
//_____________________________________дз на верху__________________
// //const column2Div = document.getElementsByClassName("columnTwo");
// for (let i = 0; i <= 1 ; i++) {
//   let li2 = document.createElement("li");
// //   li2.innerHTML = "ijojrujeju";

// column2.append(li2);
// };

// const fax = document.getElementsByTagName('li');
// fax[1].className = 'fax';
// fax.innerHTML = "ybrebyxbv";

// const phone = document.getElementsByTagName('li');
// phone[2].className = 'phone';
// phone.innerHTML = 'huihihihh';

// console.log(fax[2])

//________________________________________________________
// const button1 = document.getElementsByTagName('button');
//  //console.log("button1", button);
// const button = button1[0];

//console.log("button1", button);

// button.onclick = function () {
//   alert("1");  //

//   console.log("button after onclick", button);
// };

// button.addEventListener('click', function(){
//     alert(3)
// })
// button.addEventListener('click', function(){
//      alert(4)
// });

// const button = document.getElementsByTagName('button');
//  //console.log("button1", button);
// const button = button[1];

// const button = document.getElementsByTagName('button');
//  //console.log("button1", button);
// const button = button[2];

// const func = () => {
//     alert(7)
// };

// button.addEventListener('click', func);

// const click1 =  document.getElementById('click');
//  click1.addEventListener('click', function (){
//      alert(100500)
//  });
// console.log(click1);

// const func = () => {
//     alert(1050);

// };
// click1.addEventListener('click', func);

// const click2 = document.getElementsByTagName('button');
// console.log(click2)
// const click2a = click2[1];

// click2a.addEventListener('click', function () {
//     alert(1234567)
// });
// ------------------------------------------------

// const buttonPress = document.getElementById("the_button");
// console.log(buttonPress);

// const coun = document.getElementById("counter");

// buttonPress.addEventListener("click", () => {
//   let numb = Number(coun.innerText);

//   console.log(numb);
//   // coun.innerText = ++numb
//   coun.innerText = ++numb;
//   if (numb === 5) {
//     alert("5 click!!!!!");
//   } else {
//   }
// });

// console.log(coun);

// const clo = document.getElementsByClassName('close1')

// const close = document.getElementsByClassName('container');
// console.log(close);
// document.close.addEventListener('click', (event) => {
//     if(event.target.tagName === 'p') {
//         if (event.target.style.display === "") {
//             event.target.style.display = 'none'
//         }
//     }
// });

//  ul.prepend(li1);
//  ul.prepend(li2);
//  ul.prepend(li3);

// const pointOne = document.querySelector("li");
// pointOne.className = "point_home_page";

// const link1 = document.createElement("a");
// link1.className = "link_home_page";
// link1.innerHTML = "Home page";

//  const pointTwo = document.querySelector("li");
//   pointTwo.className = "point_about_us"

//let link2 = document.createElement("a");
//link2.className = "link_about_us";

//let pointThree = document.querySelector("li");
//pointThree. className = "point_contacts";

//let link3 = document.createElement("a");
//link3.className = "link_contacts";

//  pointOne.prepend(link1);
//pointTwo.prepend(link2);
//pointThree.prepend(link3);

//  let myArray = [{className = "point_about_us"}, {className = "point_contacts"},];

//  $('li').each( function () {
//      this.className = myArray.shift();
//  });

//  <script>
//         let arr = ['BMW', 'Mercedes', 'Volkswagen', 'Toyota'];

//         const carList = document.querySelector('.car-list');
//         let list = '';

//         arr.forEach(item => {
//             list += `<li>${ item }</li>`
//         });

//         carList.innerHTML = list;
//     </script>

// const forma = document.createElement("form");
// const forman = document.getElementsByTagName("form");
// document.body.append(forman);

// const diva = document.createElement("div");
// const div = document.getElementsByTagName("div");
// forma.append(div);

// const pa = document.createElement("p");
// const pan = document.getElementsByTagName("p");
// dispatchEvent.append(pan);

// console.log(div);

// const buttonPress = document.getElementById('the_button');
// //  console.log(buttonPress )

//  const coun = document.getElementById('counter');

//  buttonPress.addEventListener('click', () => {
//      let numb = Number(coun.innerText);

//      console.log(numb)
//     // coun.innerText = ++numb
//      coun.innerText = --numb
//      if (numb === 5){
//         alert ('5 click!!!!!')
//      } else {
//          coun.style.display = 'none';
//      }
//  });

//  console.log(coun)
//____________________________________________________________________
// const pla = document.getElementById("plas");
// const posi = document.getElementById("positiv");
// pla.addEventListener("click", () => {
//   let num = Number(posi.innerText);
//   posi.innerText = ++num;
// });
// console.log(pla);

// const min = document.getElementById("minus");
// const nega = document.getElementById("negativ");
// min.addEventListener("click", () => {
//   let num = Number(nega.innerText);
//   nega.innerText = --num;
// });
// console.log(min);
//______________________________________________________________--

// const press = document.getElementById('press_li')
// press_li.addEventListener('click', (event) => {
// console.log(event.target.tagName)
// if(event.target.tagName ==="LI"){

// }
// });

// const coord = document.getElementsByClassName('coordinats')

// coord.addEventListener('', function (event) {
//     console.log(event)
// });

// document.body.addEventListener('keydown', function (event) {
//     console.log(event)
// })

// ___________________________________________________________________

// const form = document.forms
// console.log(form)

// form.addEventListener('blur', (event) => {
//   console.log(event.target.value);

// });
// const input =document.forms
// input.onblir = function () {
//   if (!input.value.includes("@")) {
//     input.classList.add("invalid");
//     error.innerHTML = "посмотри какую дичь ты написал!";
//   }
// };
// input.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };
//-___________________________________________________________
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

//_______________запрещает отравку данных на сервер/

// local storage_____________________________

// const obj = {
//   name: "Ivan",
// };

// localStorage.setItem("obj", JSON.stringify(obj));

// const value = localStorage.getItem("obj");
// console.log(JSON.parse(value));

// function login() {
//   let userName = document.querySelector("input.userName");
//   let password = document.querySelector("input.password");
//   let buttom = document.querySelector("input.buttom");
//   //document.querySelector('form.log_in').innerHTML = nikname + passw;

//   let nikname = userName.value;
//   let passw = password.value;
//     if (nikname.length < 5) {
//       alert("эээ придумай  имя другое ( придумай больше 5и символов)");
//     return;
//     }
//     console.log(123)

//     if (passw.length < 5) {
//       alert("ой опять слишком короткий пароль ( придумай больше 5и сивовлов)");
//       return;
//     }
//     console.log(123)

//     const array = passw.split('');
//     console.log(array)

//     const obj = {
//       name: nikname,
//       password: passw,
//     };


//   localStorage.setItem("obj", JSON.stringify(obj));
//   const value = localStorage.getItem("obj");
//   console.log(JSON.parse(value));
// }
// document.form.onsubmit = login;
//___________________________________________________


//document.cookie = " user = Pupkin";
//alert(document.cookie)



const  object = {
  name:  "jon",
   surname: "Pupkin",
  age: 20
}

const {name, age } = object
console.log()

//++++++++++++++++++++++++++++
///прочитать модуль экспорт и инпорт.______________  
//_______________________________________________________
// mvk посмотреть дома ________________________________
//__________________________________________


let div = document.querySelector('.container')