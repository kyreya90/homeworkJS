// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let box;
box = [2023,1990,32,'lviv',"kyreya",'mykhaylo','vasyliovych','java','script','december'];
console.log(box)
console.log(box[0])
console.log(box[1])
console.log(box[2])
console.log(box[3])
console.log(box[4])
console.log(box[5])
console.log(box[6])
console.log(box[7])
console.log(box[8])
console.log(box[9])
box[box.length]='february'
console.log(box)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title:'harry potter',
    pageCount: 232,
    genre:'Adventure',
}
console.log(book1)

let book2={
    title: 'kotygoroshko',
    pageCount: 33,
    genre: 'fairy tale',
}
console.log(book2)
let book3={
    title: 'gopsek',
    pageCount: 150,
    genre: 'classic',
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
book1.autors = ["Joanne Rowling",45]
console.log(book1)
book2.autors = ["folk",200]
console.log(book2)
book3.autors = ["Honore de Balzac",178]
console.log(book3)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let box2;
box2=[
    {name:'anton', username:'wewe', password:1234},
    {name:'bogdan', username:'bebe', password:2345},
    {name:'petro', username:'bebe', password:3456},
    {name:'ivan', username:'bebe', password:4567},
    {name:'vasya', username:'bebe', password:5678},
    {name:'yurs', username:'bebe', password:6789},
    {name:'misha', username:'bebe', password:7890},
    {name:'vanya', username:'bebe', password:12345},
    {name:'stepan', username:'bebe', password:123456},
    {name:'roman', username:'bebe', password:1234567},

]
console.log(box2)
console.log(box2 [0].password)
console.log(box2 [1].password)
console.log(box2 [2].password)
console.log(box2 [3].password)
console.log(box2 [4].password)
console.log(box2 [5].password)
console.log(box2 [6].password)
console.log(box2 [7].password)
console.log(box2 [8].password)
console.log(box2 [9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x=100;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
if(x!==0){console.log('вірно')
}
else {console.log('невірно')}
let a;
x=a;
a=1;
if(a!==0){console.log('вірно')}
else {console.log('невірно')}
a=0
if(a!==0){console.log('вірно')}
else {console.log('невірно')}
a=-3
if(a!==0){console.log('вірно')}
else {console.log('невірно')}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time;
time= +prompt("введіть час від 0 до 59");
console.log(time)
if (time&&(0<=time)&&(time<=15)) {
    console.log('one');
} else if (time&&(15<time)&&(time<=30)) {
    console.log('two');
} else if (time&&(30<time)&&(time<=45)) {
    console.log('three');
} else if (time&&(45<time)&&(time<=59)) {
        console.log('for');
} else if (time&&(59<time)) {
        console.log('число має бути від 0 до 59');}
else {
    console.log('введіть числове значення');}
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;
day= +prompt("введіть день місяця");
console.log(day)
if (day&&(1<=day)&&(day<=10)) {
    console.log('перша декада');
} else if (day&&(10<day)&&(day<=20)) {
    console.log('друга декада');
} else if (day&&(20<day)&&(day<=31)) {
    console.log('третя декада');
} else if (day&&(31<day)) {
    console.log('в місяці немає стільки днвів');
} else {
    console.log('введіть числове значення');}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
    let days;
    days=0;
    let days1 = +prompt('enter first namber');
    let days2 = +prompt('enter second namber');
    console.log(days)

    if ((days1<days2)) {days=(''+days2);}
    else if ((days1>days2)) {days=(""+days1);}
    else if ((days1===days2)) {days=(""+days1);}
    console.log(days)

switch (days) {
    case '1':
        console.log('понеділок');
        break;
    case '2':
        console.log('вівторок');
        break;
    case '3':
        console.log('середа');
        break;
    case '4':
        console.log('четвер');
        break;
    case '5':
        console.log('пятниця');
        break;
    case '6':
        console.log('субота');
        break;
    case '7':
        console.log('неділя');
        break;
    default:
        console.log('введіть від 1 до 7');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let p = null;
    console.log(p)
if ((p===0)||(p==="")||(p===null)||(p===undefined)){(p='default')}
console.log(p)
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
    console.log(coursesAndDurationArray );
console.log(coursesAndDurationArray[3]['monthDuration']);
if ((coursesAndDurationArray[0]['monthDuration'])>5){console.log('super');} else {console.log('not super')}
if ((coursesAndDurationArray[1]['monthDuration'])>5){console.log('super');} else {console.log('not super')}
if ((coursesAndDurationArray[2]['monthDuration'])>5){console.log('super');} else {console.log('not super')}
if ((coursesAndDurationArray[3]['monthDuration'])>5){console.log('super');} else {console.log('not super')}
if ((coursesAndDurationArray[4]['monthDuration'])>5){console.log('super');} else {console.log('not super')}
if ((coursesAndDurationArray[5]['monthDuration'])>5){console.log('super');} else {console.log('not super')}


