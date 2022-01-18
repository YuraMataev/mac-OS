const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
// console.log('red');
// }




btns[0].addEventListener('click', () => { //обработка события
    if (!btns[1].classList.contains('red')) { //проверка на класс есть он или нет у кнопки 2
        btns[1].classList.add('red'); //если нет класса,то он добавляется
    } else {
        btns[1].classList.remove('red'); //если нет то удаляется
    }
});