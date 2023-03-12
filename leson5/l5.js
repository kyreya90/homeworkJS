// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let s =(a,b)=>a*b;
console.log(s(10,23))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areacircle(r) {

//     return PI*r**2;
    const PI=3.14159
    const sk=(r)=>PI*r**2
console.log(sk(3))
// }
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h) {
//     return sCircle*h
const sc=(r,h)=>2*PI*r*h;
console.log(sc(3,12))
// console.log(areaCylinder(2))
// // - створити функцію яка приймає масив та виводить кожен його елемент
let users = [23,4,5,4553,32,56,778,7];
let elem = masyv => {
    for (const Element of masyv) {
        console.log((Element))
    }
};
elem(users)
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
let paragraf=(text1, text2)=>{
    document.write(`<div> <h2>${text1}</h2> <p>${text2}</p> </div>`)
}
paragraf ("hi", "ghj");
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
ul=(li1, li2, li3)=>{
    document.write(`<div> <ul>
<li>${li1}</li>
<li>${li2}</li>
<li>${li3}</li>
</ul>  </div>`)
}
ul ("hi", "ghj",'sds');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
ul2=(li1,hh)=>{
    for (let i = 0; i < hh; i++) {
        document.write(`<ul><li>${li1}</li></ul>`)}
}
ul2("hallo",5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
const masyv= [2,3,true,false,[23,3,45,true],'wewe'];

spysok=(arr)=>{
    for (const arrElement of arr) {
        document.write(`<ul><li>${arrElement}</li></ul>`)
    }
}
spysok(masyv);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
let men= [
    {
        id: 546,
        name: 'petya',
        age:32
    },
    {
        id: 546,
        name: 'petya',
        age:32
    },
    { id: 546,
        name: 'petya',
        age:32
    }];

 blokk=(arr)=> {
    for (let man of arr) {
        document.write(`<div>
                            <h1>${man.name}</h1>
                             <h2>${man.id}</h2>
                            <h3>${man.age}</h3>
                      </div>`)}
}
blokk(men)

// // - створити функцію яка повертає найменьше число з масиву
let nam=[21,3,4,5,78,6]
const minimum=(arr)=>{
    let biger=arr[0]
    for (const elment of arr) {
        if (biger>elment) {
            biger=elment
        }
    }
    return biger
}
console.log(minimum(nam))
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
let arrr=[21,21,32,34,]
const sum=(arr)=>{
    let bascket=0;
    for (const argument of arr) {
        bascket=bascket+argument
    }
    return bascket;
}
console.log(sum(arrr)
)
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
const swap=(arr,index1,index2)=>{
    let q1= arr[index1]
    let q2= arr[index2]

    arr[index1]=q2
    arr[index2]=q1
    return arr
}
console.log(swap([23,23,45,67,323,23],2,4))
//
//
//
//
//
// // - Написати функцію обміну валюти hange(sumUAH,curexcrencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// // exchange (10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
const hange=(sumUAH,curexcrencyValues,exchangeCurrency)=>{
    for (const caren of curexcrencyValues) {
        if (caren.currency===exchangeCurrency){
            return sumUAH/caren.value;
        }
    }
}
console.log(hange(10000,[
        {currency:'USD',value:40},
        {currency:'EUR',value:42}],
    'USD'))

const pppp=[32,434,565,33,23,4]
const minmax=([...arr])=>{
    let min=arr[0];
    let max=arr[0];
    for (const nam of arr) {
if(min>nam) min=nam;
if(max<nam) max=nam;}
console.log(`MAX: ${max}`);
    console.log(`MIN: ${min}`);}
minmax(pppp)

