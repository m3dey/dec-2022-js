//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'amba' ,
    pageCount: 123,
    genre: 'horor',
    author1:[{name:'Oleg Viks', age: 31}]
}
let book2 = {
    title: 'pipy',
    pageCount: 321,
    genre: 'fantasty',
    author2:[{name:'Andriy Viks', age: 21}]
}
let book3 = {
    title: 'abiba',
    pageCount: 444,
    genre: 'detective',
    author3:[{name:'Stepan Viks', age: 51}]
}
console.log(book2.author2[0].age)

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let array = [
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
    {
    name:'nai asd',
    username: 'asdasd',
    password:1231231,
    },
]
console.log(array[0].password);
console.log(array[1].password);
console.log(array[2].password);
console.log(array[3].password);
console.log(array[4].password);
console.log(array[5].password);
console.log(array[6].password);
console.log(array[7].password);
console.log(array[8].password);
console.log(array[9].password);


//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if(x!==0){
    console.log('Virno')
}else {
    console.log('Nevirno')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 32;

if (time>=0 && time<=14){
    console.log('first quarter');
}else if (time>14 && time<=29){
    console.log('second quarter');
}else if (time>29 && time<=44){
    console.log('third quarter');
}else if (time>44 && time<=59){
    console.log('fourth quarter');
}else {
    console.log('????');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 2;

if (day>=1 && day<=10){
    console.log('first decade');
}else if (day>10 && day<=20){
    console.log('second decade');
}else if (day>20 && day<=31) {
    console.log('third decade');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNum = 2 ;

switch (dayNum){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('Input first number');
let num2 = prompt('Input second number');


if (num1>num2){
    console.log(num1);
}
else if (num1<num2) {
    console.log(num2);
}
else if(num1===num2) {
    console.log('equal')
}







//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let y = 0;
console.log(y);

if (!y){
    y = 'default';
}

console.log(y);


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}










