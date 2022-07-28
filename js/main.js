document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const items = document.querySelectorAll('.form__item');
  const itemsArray = Array.from(items);
  const inputs = document.querySelectorAll('.form__input');
  const inputsArray = Array.from(inputs);

  // 未入力のitemにemptyクラスを付与
  const addClassEmpty = function (array, i) {
    array[i].classList.add('empty');
  };

  // input、textareaの未入力チェック
  const checkEmptyText = function (input) {
    if (input.textContent == '') {
      console.log('未入力です');
    } else {
      console.log('入力されている');
    }
  };
  checkEmptyText(inputsArray[0]);
  addClassEmpty(itemsArray, 0);
});
