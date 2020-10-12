'use strict';

const burger = document.querySelector('.burger');
const classToggle = () => {
  burger.classList.toggle('active');
};

burger.addEventListener('click', classToggle);
