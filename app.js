window.onload = function () {
  increaseNum();
  decreaseNum();
  slideNum();
};

let btnLeft = document.querySelector('.controller__btn-left');
let btnRight = document.querySelector('.controller__btn-right');
let input = document.querySelector('.controller__data');
let slider = document.querySelector('.controller__slider');

function increaseNum() {
  btnRight.addEventListener('click', () => {
    if (input.value < 10000) {
      input.value = parseInt(input.value) + 1;
    }
  });
}

function decreaseNum() {
  btnLeft.addEventListener('click', () => {
    if (input.value > 100) {
      input.value = parseInt(input.value) - 1;
    }
  });
}

function slideNum() {
  slider.addEventListener('input', (e) => {
    input.value = e.target.value;
  });
}
