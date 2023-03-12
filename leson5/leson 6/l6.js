// Знайти та вивести довжину настипних стрінгових значень
let arr=['hello world', 'lorem ipsum', 'javascript is cool'];

arr.forEach((item)=>(console.log(item.length)))

// - Перевести до великого регістру наступні стрінгові значення
let arrr=arr.map((item)=>item.toUpperCase())
console.log(arrr)
// - Перевести до нижнього регістру настипні стрінгові значення
console.log(['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map((item)=>item.toLowerCase()))

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

str = ' dirty         string   '
console.log(str)
str2=str.trim()
console.log(str2)
let str3=str.trim().split(' ').filter((w)=>w.length).join(' ');
console.log(str3)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str4 = 'Ревуть воли як ясла повні';
let str5=str4.trim().split(' ')
console.log(str5)

const foo = (string)=> {
    return string.split(" ")}
console.log(foo(str4))
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr2=[10,8,-7,55,987,-1011,0,1050,0]
let arr3=arr2.map((nom)=>nom.toString())
console.log(arr3)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNam = (arr,vector)=> {
    switch (vector) {
    case 'as':
return arr.sort((a, b) => a-b);
    case 'des':
return  arr.sort((a, b) => b-a);}
}
 let arr6=sortNam(nums,'as')
console.log(arr6)

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration)

console.log(coursesAndDurationArray)

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let ar=coursesAndDurationArray.filter((item)=>item.monthDuration>5)
console.log(ar)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let art=coursesAndDurationArray.map((item,index)=>({...item,id:index+1}))
console.log(art)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
//spade black
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
//diamond red
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
//heart red
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
//clubs black
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
]
// - знайти піковий туз/
console.log(cards.find((card)=>card.cardSuit==='spade'&&card.value==='ace'))
// / - всі шістки
console.log(cards.filter((card)=>card.value==='6'))
// - всі червоні карти
console.log(cards.filter((card)=>card.color==='red'))
// - всі буби
// - всі трефи від 9 та більше
console.log(cards.filter((card)=>card.cardSuit==='clubs'&&['9','10','king','queen','jack','ace'].includes(card.value)))
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//

const box = cards.reduce((acc, current) => {
    acc[current.cardSuit].push(current);
    return acc
},{spade:[],diamond:[],heart:[],clubs:[]})
console.log(box)
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// // --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter((item)=>item.modules.includes('js')))
console.log(coursesArray.filter((item)=>item.modules.includes('docker')))
