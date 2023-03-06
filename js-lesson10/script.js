//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function placeInfo(){
    let name=document.getElementById('name').value;
    let surname=document.getElementById('surname').value;
    let age=document.getElementById('age').value;
    document.getElementById('output').innerText= `Name: ${name}, Surname: ${surname},Age: ${age}`;
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let loadCounter=parseInt(localStorage.getItem('counter'))||0;
window.addEventListener('load',()=>{
    let countingBlock=document.getElementsByClassName('loadCount')[0];
    loadCounter++;
    countingBlock.innerText = loadCounter.toString();
    localStorage.setItem('counter', loadCounter);
})

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessions = JSON.parse(localStorage.getItem('sessions'))||[];
 sessions.push(new Date().toLocaleString());
localStorage.setItem('sessions',JSON.stringify(sessions));

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// Створюємо масив з числами від 1 до 100
let itemsArray = [];
for (let i = 0; i<100; i++){
    itemsArray.push({Item: i+1});
}
let itemList=document.getElementById('itemList');
let prevButton=document.getElementById('prev');
let nextButton=document.getElementById('next');
const itemsPerPage=10;
let currentPage=0;
function updateItems() {
    let startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    itemList.innerHTML='';
    for (let i = startIndex; i < endIndex; i++) {
        let blockItem = document.createElement('div');
        blockItem.innerText =`Item:${itemsArray[i].Item}`;
        itemList.appendChild(blockItem);
    }
}
function toNextPage() {
    currentPage++;
    if (currentPage>itemsArray.length/itemsPerPage){
        currentPage=0;
    }else {
       updateItems();
    }
}
function toPrevPage() {
    currentPage--;
    if (currentPage<0){
        currentPage=itemsArray.length/itemsPerPage;
    }else {
       updateItems();
    }
}
nextButton.addEventListener('click',toNextPage);
prevButton.addEventListener('click',toPrevPage);
updateItems();


