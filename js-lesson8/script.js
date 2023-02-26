//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// };

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let userList=[
//     new User(1,'asd','asdd','asgdfg@pytin.lox', 01982303591),
//     new User(2,'aasd','sdfgsdbfsdd','aASDFad@pytin.lox', 0198230345291),
//     new User(3,'axcd','fghhmcxvn','aasdfasd@pytin.lox', 019823225091),
//     new User(4,'axcvd','sghvbsddh','asasdfwegsd@pytin.lox', 01982523091),
//     new User(5,'dgfbd','sdvbcxb','ashnrhjsd@pytin.lox', 019822343091),
//     new User(6,'afbs','sdfb','asertyjdasd@pytin.lox', 01982312091),
//     new User(7,'ssdfvc','sdfgsd','asdaejertjsd@pytin.lox', 01141823091),
//     new User(8,'qasdf','asadfdbdd','asdaejyjsd@pytin.lox', 01984323091),
//     new User(9,'qdfnhtj','abvyte','asdfgnasd@pytin.lox', 019821563091),
//     new User(10,'rtjmjed','adbdvb','asderyhjsd@pytin.lox', 0198283091),
// ]
// console.log(userList);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filteredUserList=userList.filter(value=>value.id%2===0);
// console.log(filteredUserList);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUserList = userList.sort((a,b)=> a.id-b.id);
// console.log(sortedUserList);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class User {
//     constructor(id,name,surname,email,phone,order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//     }
// };
// let Client=[
//     new User(1,'asd','asdd','asgdfg@pytin.lox', 82303591,['potato','carrot','eggs','flavor','charger','butter','apple','orange']),
//     new User(2,'aasd','sdfgsdbfsdd','aASDFad@pytin.lox', 8230345291,['carrot','eggs','flavor','charger','butter','apple','orange']),
//     new User(3,'axcd','fghhmcxvn','aasdfasd@pytin.lox', 823225091,['potato','carrot',]),
//     new User(4,'axcvd','sghvbsddh','asasdfwegsd@pytin.lox', 82523091,['potato','carrot','eggs','flavor','butter','apple']),
//     new User(5,'dgfbd','sdvbcxb','ashnrhjsd@pytin.lox', 822343091,['potato','carrot','eggs','flavor','butter','apple','orange']),
//     new User(6,'afbs','sdfb','asertyjdasd@pytin.lox', 82312091,['potato','carrot','eggs','flavor','charger','butter','apple','orange']),
//     new User(7,'ssdfvc','sdfgsd','asdaejertjsd@pytin.lox', 141823091,['potato','carrot','eggs','flavor','charger','butter','apple','orange']),
//     new User(8,'qasdf','asadfdbdd','asdaejyjsd@pytin.lox', 984323091,['potato','carrot','flavor','charger','apple','orange']),
//     new User(9,'qdfnhtj','abvyte','asdfgnasd@pytin.lox', 9821563091,['potato','carrot','eggs','flavor','charger','butter','apple','orange']),
//     new User(10,'rtjmjed','adbdvb','asderyhjsd@pytin.lox', 98283091,['eggs','flavor','charger','apple','orange']),
// ]
// console.log(Client);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedClient=Client.sort((a,b)=>a.order.length-b.order.length);
// console.log(sortedClient);

////////////////////////////////////////////////////////

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model,manufacturer,year,maxSpeed,engineVolume){
//     this.model=model;
//     this.manufacturer=manufacturer;
//     this.year=year ;
//     this.maxSpeed=maxSpeed;
//     this.engineVolume=engineVolume;
//
//     this.drive= function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     this.info= function (){
//         console.log(`Модель: ${model}`);
//         console.log(`Виробник: ${manufacturer}`);
//         console.log(`Рік випуску: ${year}`);
//         console.log(`Максимальна швидкість: ${maxSpeed}`);
//         console.log(`Об'єм двигуна: ${engineVolume}`);
//     };
//
//     this.increaseMaxSpeed=function (newSpeed){
//       this.maxSpeed=newSpeed;
//     };
//
//     this.changeYear= function (newValue){
//         this.year=newValue;
//     };
//
//     this.addDriver=function (driverInfo){
//         this.driver= driverInfo;
//     }
// }
// let everyCar =new Car("Model S", "Tesla", 2022, 250, 3.2);

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(everyCar.drive());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// console.log(everyCar.info());

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// everyCar.increaseMaxSpeed(350);
// console.log(everyCar);

//     -- changeYear (newValue) - змінює рік випуску на значення newValue
// everyCar.changeYear(1899);
// console.log(everyCar);

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// everyCar.addDriver('Ilona Maskovna');
// console.log(everyCar);

////////////////////////////////////////////////////////

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car{
//     constructor(model,manufacturer,year,maxSpeed,engineVolume) {
//
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     info () {
//         console.log(`Модель: ${this.model}`);
//         console.log(`Виробник: ${this.manufacturer}`);
//         console.log(`Рік випуску: ${this.year}`);
//         console.log(`Максимальна швидкість: ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна: ${this.engineVolume}`);
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//
//     addDriver (driverInfo) {
//         this.driver = driverInfo;
//     }
// }
// let everyCar =new Car("Model S", "Tesla", 2022, 250, 3.2);

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(everyCar.drive());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// console.log(everyCar.info());

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// everyCar.increaseMaxSpeed(350);
// console.log(everyCar);

//     -- changeYear (newValue) - змінює рік випуску на значення newValue
// everyCar.changeYear(1899);
// console.log(everyCar);

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// everyCar.addDriver('Ilona Maskovna');
// console.log(everyCar);

////////////////////////////////////////////////////////

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name,age,footSize) {
//         this.name=name;
//         this.age=age;
//         this.footSize=footSize;
//     }
//
// }
// let cinderellas = [
//     new Cinderella("Ольга", 20, 36),
//     new Cinderella("Ірина", 22, 37),
//     new Cinderella("Юлія", 19, 38),
//     new Cinderella("Тетяна", 21, 35),
//     new Cinderella("Людмила", 23, 36.5),
//     new Cinderella("Наталія", 20, 39),
//     new Cinderella("Оксана", 25, 38),
//     new Cinderella("Катерина", 19, 37),
//     new Cinderella("Марія", 22, 38.5),
//     new Cinderella("Анна", 21, 36),
// ];

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince("Олександр", 25, 36.5);

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let foundCinderella = false;
// for (let thisOneCinderella of cinderellas) {
//     if (thisOneCinderella.footSize === prince.foundShoe){
//         console.log(`Принц ${prince.name} знайшов свою попелюшку: ${thisOneCinderella.name}`);
//         foundCinderella=true;
//         break;
//     }
// }
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// if (!foundCinderella){
//     console.log(`На жаль, принц ${prince.name} не знайшов свою попелюшку.`);
// }
// console.log(cinderellas.find((value)=>value.footSize===prince.foundShoe));




