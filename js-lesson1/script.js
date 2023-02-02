//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
let school = 'owu';
let domain = 'com';
let country = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let boolean1 = true;
let boolean2 = false;

console.log(greeting);
console.log(school);
console.log(domain);
console.log(country);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(boolean1);
console.log(boolean2);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstname = 'Михайло';
let middlename = 'Борщов';
let lastname = 'Олександрович';

let person = firstname + " " + middlename + " " + lastname;
console.log(person);

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Output:
// number
// string
// boolean


//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("Please enter a name");
let lastName = prompt("Please enter a last name");
let age = prompt("Please enter a year");

console.log("Name: " + name + "\nLast Name: " + lastName + "\nAge: " + age);