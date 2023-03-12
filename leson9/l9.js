// // - створити блок,
const block = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'blue';
block.style.color = 'green';
block.style.fontSize = '38px';
block.innerText = 'HELLO';
// // - додати цей блок в body.
const body = document.querySelector('body');
body.appendChild(block);
// // - клонувати його повністю, та додати клон в body.
const clone = block.cloneNode(true);
clone.style.backgroundColor = 'yellow';
body.appendChild(clone);