let number = document.querySelector('.num');
let counter = 0;
number.textContent = counter;

//Get buttons
let btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('increase')) {
            counter++;
        } else if (btn.classList.contains('decrease')) {
            counter--;
        } else if (btn.classList.contains('reset')) {
            counter = 0;
        }
        number.textContent = counter;
        changeColor(counter)
    })

})

const changeColor = (num) => {
    if (num > 0) {
        number.style.color = "green"
    } else if (num < 0) {
        number.style.color = "red"
    }
    else {
        number.style.color = "#191919"
    }
}



