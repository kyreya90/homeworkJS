// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
let id=1;
function User(name, surname , email, phone){
    this.id=id++
    this.name=name
    this.surname=surname
    this.phone=phone
    this.email=email
}
const max=[
    new User('mike', 'fdf', 'ssd',3547864),
    new User('hniki', 'fdf', 'ssd',439547864),
    new User('sdsa', 'fadfa', 'ssd',439547864),
    new User('erec', 'fdf', 'ssd',380975178),
    new User('rc', 'fdf', 'ssd',639547864),
    new User('hefc', 'fff', 'ssd',39547864),
    new User('hec', 'fdf', 'ssd',396547864),
    new User('fc', 'fdf', 'ssd',349547864)
];
console.log(max)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)\
let maxid=max.filter((item)=>!(item.id%2))
console.log(maxid)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
max.sort((a,b)=>b.id-a.id)
console.log(max)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function Client(name, surname, email, phone, order) {
  User.call(this, name, surname, email, phone)
  this.order = order
}
let  orders= [
    new Client('hfhf', 'fsdfs','sdsds',5454956,['dsdsdsfs','aeadeda','aeaadf','afaf']),
    new Client('hedgff', 'dfd','sdsds',5454956,['dsdsdsfs','aeadeda','aeaadf']),
    new Client('hsdgs', 'ffsd','sdsds',54343956,['dsdsdsfs','aeadeda','aeaadf','afaf']),
    new Client('gsgf', 'fdfsrd','sdsds',5454956,['dsdsdsfs','aeadeda','aeaadf']),
    new Client('hgsdf', 'fdfd','sdsds',54545356,['dsdsdsfs','aeadeda','aeaadf','afaf']),
    new Client('hdg', 'fddf','sdsds',545445456,['dsdsdsfs']),
    new Client('hsdgshf', 'fdfd','sdsds',5454956,['dsdsdsfs','aeaadf','afaf']),
    new Client('hgsf', 'fdfd','sdsds',5454956,['dsdsdsfs','aeadeda','aeaadf','afaf']),
    new Client('hgf', 'ffgdd','sdfgs',5454956,['dsdsdsfs','aeadeda'])
]
console.log(orders)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(orders.sort((clientA,clientB)=>clientA.order.length-clientB.order.length))
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//  class Car{
//     constructor (model, producer, year, maxSpeed, volume) {
// this.model = model;
// this.producer = producer;
// this.year = year;
// this.maxSpeed = maxSpeed;
// this.volume = volume;
// this.drivers = [];
//
//   this.drive = function() {
//     return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//   }
//      this.info = function() {
//     console.log('**** INFO ****')
//     for (const key in this) {
//       if (typeof this[key] === 'function') continue;
//       console.log(`${key.toUpperCase()} - ${JSON.stringify(this[key])}`);
//     }
//  }}}
// let car12=new Car('audi','germany',1999,270,2.1)
// console.log(car12.drive())

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drivers = [];

  this.drive = function() {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`
  }
  this.info = function() {
    console.log('**** INFO ****')
    for (const key in this) {
      if (typeof this[key] === 'function') continue;
      console.log(`${key.toUpperCase()} - ${JSON.stringify(this[key])}`);
    }
    console.log('**** INFO ****')
  }
  this.increaseMaxSpeed =function(newSpeed) {
    const speed = this.maxSpeed + newSpeed;
    if (speed < 0) {
      this.maxSpeed = 0;
    } else {
      this.maxSpeed = speed;
    }
  }
  this.changeYear = function changeYear(newValue) {
    this.year = newValue;
  }
  this.addDriver = function(name, age, experience) {
    if (name.length < 2) throw new Error('Min name length 2 chars');
    this.drivers.push(new Driver(name, age, experience));
  }
}
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const car1 = new Car('A7', 'Audi', 2017, 320, 3.8)
car1.drive()
car1.info()
car1.increaseMaxSpeed(-2000)
car1.info()
car1.changeYear(1300);
car1.info()
car1.addDriver('Max', 19, 1);
car1.addDriver('Anna', 16, 2);
car1.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carq {
  constructor(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drivers = [];
  }

  drive() {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`
  }

  info() {
    console.log('**** INFO ****')
    for (const key in this) {
      console.log(`${key.toUpperCase()} - ${JSON.stringify(this[key])}`)
    }
    console.log('**** INFO ****')
  }

  increaseMaxSpeed(newSpeed) {
    const speed = this.maxSpeed + newSpeed;
    if (speed < 0) {
      this.maxSpeed = 0;
    } else {
      this.maxSpeed = speed;
    }
  }

  changeYear(newValue) {
    this.year = newValue;
  }

  addDriver(name, age, experience) {
    if (name.length < 2) throw new Error('Min name length 2 chars');
    this.drivers.push(new Driverq(name, age, experience));
  }
}

class Driverq {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
}

const car2 = new Car('A7', 'Audi', 2017, 320, 3.8)
console.log(car2.drive())
car1.info()
car1.increaseMaxSpeed(-2000)
car1.info()
car1.changeYear(1300);
car1.info()
car1.addDriver('Max', 19, 1);
car1.addDriver('Anna', 16, 2);
car1.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Popelushka extends Human {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findPrincess1(arr) {
        for (const candidate of arr) {
            if (candidate.footSize === this.bootSize) {
                return candidate;
            }
        }
    }
    findPrincess2(arr) {
        return arr.find((candidate) => candidate.footSize === this.bootSize);
    }
}

const popelArr = [
    new Popelushka('Anna', 38, 38),
    new Popelushka('Tamara', 58, 40),
    new Popelushka('Alina', 18, 36),
    new Popelushka('Olga', 19, 37),
    new Popelushka('Irina', 20, 38),
    new Popelushka('Rita', 18, 39),
    new Popelushka('Inna', 18, 35),
    new Popelushka('Sergey', 38, 36),
];
const prince = new Prince('Dima', 18, 36);

console.log(prince.findPrincess1(popelArr));
console.log('*******')
console.log(prince.findPrincess2(popelArr));