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


//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1='HELLO WORLD';
// let str2='LOREM IPSUM';
// let str3='JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(string){
//     return str.split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let arrToString=arr.map(item => item.toString());
// console.log(arrToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(value,direction){
//     if (direction === 'ascending'){
//         value.sort(function (a,b){
//             return a-b;
//         });
//     }else if (direction === 'descending'){
//         value.sort(function (a,b){
//             return b-a;
//         });
//     }
//     return value;
// }
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//  -- відсортувати його за спаданням за monthDuration
// let sortedArray=coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration);
// console.log(sortedArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filteredArray=coursesAndDurationArray.filter((value)=>value.monthDuration>5);
// console.log(filteredArray);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mappedArray=coursesAndDurationArray.map((value,index)=>{
// return{
//     id:index+1,
//         title: value.title,
//         monthDuration: value.monthDuration,
// }
// });
// console.log(mappedArray);

// описати колоду карт (від 6 до туза без джокерів)
let deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//  - знайти піковий туз
// console.log(deck.find((value) =>value.cardSuit==='spade' && value.value=== 'ace'));
//  - всі шістки
// let sixes=deck.filter((value)=>value.value==='6');
// console.log(sixes);
//  - всі червоні карти
// let redDeck=deck.filter((value)=>value.color==='red');
// console.log(redDeck);
//  - всі буби
// let diamondDeck=deck.filter((value)=>value.cardSuit==='diamond');
// console.log(diamondDeck);
//  - всі трефи від 9 та більше
// let spadesBiggerThanEight=deck.filter((value)=>value.cardSuit==='spade' && ( value.value==='9' || value.value==='10' || value.value==='jack' || value.value==='queen' || value.value==='king' || value.value==='ace'));
// console.log(spadesBiggerThanEight);

