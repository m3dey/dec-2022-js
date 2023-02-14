//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area = (a,b) => a+b;
// console.log(area(4,6));


//- створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleArea = (r) => 3.14*r*r;
// console.log(circleArea(2));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderArea = (h, r) => 2*3.14*r*(h+r);
// console.log(cylinderArea(4,9));


//- створити функцію яка приймає масив та виводить кожен його елемент
// let showArr = array => {
//     for (let i = 0;i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// let arr = [123,4,1,42134,25,34,4];
// showArr(arr);


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let printText = text =>document.write("<p>" + text + "</p>");
// printText('lorem');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let printUL = text =>document.write(`
// <ul>
// <li> ${text} </li>
// <li> ${text} </li>
// <li> ${text} </li>
// </ul>
//     `);
// printUL('Lorem ipsum dolor.')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let printUL = (count, text) =>{
//     document.write('<ul>');
//     for (let i = 0; i < count; i++) {
//         document.write('<li>'+text+'</li>');
//     }
//     document.write('</ul>');
// }
// printUL(6, "mika mika mika mika");


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let printArrUl = arr => {
//     document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write('<li>' +arr[i] + '</li>');
//     }
//     document.write('</ul>');
// }
// let arr = [123,true,1.123,'string',25,34,4];
// printArrUl(arr);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let printArr = Arr =>{
//     for (const arrElement of Arr) {
//         document.write(`
//         <div>
//         <p>Name: ${arrElement.name}</p>
//         <p>Age: ${arrElement.age}</p>
//         <p>ID: ${arrElement.id}</p>
//         </div>
//         <hr>
//         `);
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, id: false},
//     {name: 'petya', age: 30, id: true},
//     {name: 'kolya', age: 29, id: true},
//     {name: 'olya', age: 28, id: false},
//     {name: 'max', age: 30, id: true},
//     {name: 'anya', age: 31, id: false},
//     {name: 'oleg', age: 28, id: false},
//     {name: 'andrey', age: 29, id: true},
//     {name: 'masha', age: 30, id: true},
//     {name: 'olya', age: 31, id: false},
//     {name: 'max', age: 31, id: true}
// ];
// printArr(users);


//- створити функцію яка повертає найменьше число з масиву
// let arr = [123, 4, 20, 42, 25, 34, 4];
// let minNum = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i];
//         }
//     }
//     return min;
// };
// console.log(minNum(arr));


//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sumArrayElements = (array) =>{
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//        sum += array[i];
//     }
//     return sum;
// }
// let arr = [123,4,1,42,25,34,400];
// console.log(sumArrayElements(arr));


//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (array, index1, index2) =>{
//     let temporary;
//     temporary = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temporary;
// }
// let arr = [123,4,1,42,25,34,400];
// swap(arr, 0,1)
// console.log(arr)


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,money,'USD') // => 250
// let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
//     let exchangeValue = 0;
//     for (const value of currencyValues) {
//         if (value.currency === exchangeCurrency){
//             exchangeValue = value.value;
//         }
//     }
//     return sumUAH/exchangeValue;
// }
// console.log(exchange(900, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));


