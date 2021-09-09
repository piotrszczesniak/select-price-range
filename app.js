let priceRange = document.querySelector('.price-range__range');
let priceData = document.querySelector('.price-range__data');
let planData = document.querySelector('.price-plan__data');
let btnLeft = document.querySelector('.price-range__btn-left');
let btnRight = document.querySelector('.price-range__btn-right');

priceData.innerText = priceRange.getAttribute('value');

priceRange.addEventListener('input', (e) => {
  let currentValue = e.target.value;
  priceData.innerText = currentValue;

  if (currentValue < 2500) {
    planData.innerText = 'Free';
  } else if (currentValue < 5000) {
    planData.innerText = 'Premium';
  } else if (currentValue < 7500) {
    planData.innerText = 'Enterprise';
  }
});

btnLeft.addEventListener('click', (e) => {});

btnRight.addEventListener('click', (e) => {});
