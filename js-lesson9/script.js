//створив блок
// let blockDiv = document.createElement('div');
// //дав йому класи
// blockDiv.classList.add ('wrap','collapse', 'alpha','beta');

//дав йому стилі
// blockDiv.style.width ='400px';
// blockDiv.style.backgroundColor = 'bisque';
// blockDiv.style.color = '#9086e0';
// blockDiv.style.fontSize ='22px';
// blockDiv.style.textAlign='center';
// blockDiv.style.margin ='0 0 20px'
// blockDiv.style.transition='1000ms';
// blockDiv.style.borderRadius='10px';
// blockDiv.style.boxShadow='2px 2px 4px rgba(0, 0, 0, 0.3';

//додав блок в боді
// document.body.appendChild(blockDiv);
// blockDiv.innerText='Hello World';
// //створив клон і його теж додав у боді
// let blockDivClone= blockDiv.cloneNode(true);
// document.body.appendChild(blockDivClone);

////////////////////////////////////

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let list=['Main','Products','About us','Contacts'];
// let ul=document.createElement('ul');
// for (let item of list) {
//     let li=document.createElement('li');
//     li.innerText=`${item}`;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

////////////////////////////////////

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let block=document.createElement('div');
//     let title=document.createElement('span');
//     let monthDuration=document.createElement('span')
//     title.innerText=`Title: ${item.title}`;
//     monthDuration.innerText=`MonthDuration: ${item.monthDuration}`
//     block.appendChild(title);
//     block.appendChild(monthDuration);
//     let hr=document.createElement('hr');
//     document.body.appendChild(block);
//     document.body.appendChild(hr);
// }

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let block=document.createElement('div');
//     block.className='item'
//     let title=document.createElement('h1');
//     let monthDuration=document.createElement('p')
//     title.innerText=`Title: ${item.title}`;
//     monthDuration.innerText=`MonthDuration: ${item.monthDuration}`
//     block.appendChild(title);
//     block.appendChild(monthDuration);
//     let hr=document.createElement('hr');
//     document.body.appendChild(block);
//     document.body.appendChild(hr);
// }

////////////////////////////////////

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (let member of simpsons) {
//     let memberPlace=document.createElement('div');
//     let name=document.createElement('h3');
//     let surname=document.createElement('h3');
//     let age=document.createElement('h3');
//     let info=document.createElement('p');
//     let photo=document.createElement('img');
//     photo.setAttribute('src',`${member.photo}`)
//     let hr=document.createElement('hr')
//     name.innerText=`Ім'я члена родини: ${member.name}`;
//     surname.innerText=`Прізвище члена родини: ${member.surname}`;
//     age.innerText=`Вік члена родини: ${member.age}`;
//     info.innerText=`Інформація про члена родини: ${member.info}`;
//     memberPlace.appendChild(name);
//     memberPlace.appendChild(surname);
//     memberPlace.appendChild(age);
//     memberPlace.appendChild(info);
//     memberPlace.appendChild(photo);
//     memberPlace.appendChild(hr)
//     document.body.appendChild(memberPlace);
// }

////////////////////////////////////

//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фaйлом
// let container=document.createElement('div');
// for (let item of coursesArray) {
//
//     //створив теги
//     let block=document.createElement('div');
//     let title=document.createElement('p');
//     let monthDuration= document.createElement('span');
//     let hourDuration=document.createElement('span');
//     let ul=document.createElement('ul');
//     let hr=document.createElement('hr');
//
//     //дав їм вміст
//     title.innerText=`Title: ${item.title}`;
//     monthDuration.innerText=`Month duration: ${item.monthDuration}. `;
//     hourDuration.innerText=`Hour duration: ${item.hourDuration}`;
//
//     //наповнив юльку ліжками
//     for (let itemModules of item.modules) {
//     let li=document.createElement('li');
//     li.innerText=`${itemModules}`;
//     ul.appendChild(li);
//     }
//
//     //додав це все у блок
//     block.appendChild(title);
//     block.appendChild(monthDuration);
//     block.appendChild(hourDuration);
//     block.appendChild(ul);
//     block.appendChild(hr);
//
//     //додав блок в основний контейнер
//     container.appendChild(block);
//
//
//
// }
// document.body.appendChild(container);

////////////////////////////////////

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let text=document.getElementById('text');
// let textRemover=document.getElementById('textRemover');
// textRemover.addEventListener('click',()=>text.remove());

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// function checkAge() {
//     let inputAge=document.getElementById('age');
//     let age=parseInt(inputAge.value);
//
//     if (age<18){
//         alert('Ви неповнолітній');
//     }else  {
//         alert('Ви повнолітній');
//     }
// }

//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function generateTable() {
//     let rows=parseInt(document.getElementById('rowsCount').value);
//     let columns=parseInt(document.getElementById('columnsCount').value);
//     let content=document.getElementById('tableContent').value;
//     let table=document.getElementById('generatedTable');
//
//     for (let i =0; i < rows; i++) {
//     let row=document.createElement('tr');
//         for (let j = 0; j<columns; j++){
//           let cell=document.createElement('td');
//           let cellContent=document.createTextNode(content);
//           cell.appendChild(cellContent);
//           row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
// }



