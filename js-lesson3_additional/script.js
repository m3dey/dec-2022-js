//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [3,4,5,6,7];
// console.log(arr, arr.length);
// let arr1=[ 'qasd', '1ad1', '1314wdf', ' agdf21', '124wd'];
// console.log(arr1);
// let arr2=[ 'qasd', 1, '1314wdf', true, '124wd'];
// console.log(arr2);
// let arr3 = [];
// arr3[0]=123;
// arr3[1]=12;
// arr3[2]=true;
// arr3[3]='q121';
// arr3[4]='asd';
// console.log(arr3);

//- є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
//}
// for (const number of arr) {
//     console.log(number)
// }
// let i = 0;
// while (i<arr.length){
//     if (i % 2 !== 0){
//         console.log(arr[i]);
//     }
//     i++;
// }
// for (let i = 0; i<arr.length; i++){
//     if (i % 2 !== 0){
//          console.log(arr[i]);
//      }
// }
// let i = 0;
// while (i<arr.length){
//     if (i % 2 == 0){
//         console.log(arr[i]);
//     }
//     i++;
// }
//  for (let i = 0; i<arr.length; i++){
//      if (i % 2 == 0){
//           console.log(arr[i]);
//       }
//  }

// let i = 0;
// while (i<arr.length){
//     if (i % 2 == 0){
//         console.log(arr[i]);
//     }
//     i++;
// }
//  for (let i = 0; i<arr.length; i++){
//      if (i % 3 == 0){
//           arr[i] = 'okten';
//       }
//  }
// console.log(arr);
// console.log(arr.reverse())

// let i = arr.length-1;
// while (i>=0){
//     console.log(arr[i]);
//     i--;
// }
// for (let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<=arr.length; i++){
//     console.log(arr[i]);
// }
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a , b){
//     return a*b;
// }
//
// console.log(area(12 ,4));