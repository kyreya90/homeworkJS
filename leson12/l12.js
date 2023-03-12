// зробити файл users.html

let users=fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users=> {
        for (const user of users) {
            let ul =document.createElement('ul')
            ul.classList.add('post-item')
            let a=document.createElement('a')
            a.innerText=`${user.id}-${user.name}`
            a.href='https://jsonplaceholder.typicode.com/users/'+JSON.stringify(user.id);
            ul.appendChild(a);
            // ul.innerText= `${user.id}-${user.name}`
            document.body.appendChild(ul);}})

// з ендпоінту http:??//jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком  та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// ХХХ - айді користувача)