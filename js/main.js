document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const items = document.querySelectorAll('.form__item');
  const itemsArray = Array.from(items);
  const inputs = document.querySelectorAll('.form__input');
  const inputsArray = Array.from(inputs);
  const submit = document.querySelector('.submit');

  // 未入力のitemにemptyクラスを付与
  const addClassEmpty = function (items, i) {
    console.log(items[i]);
    items[i].classList.add('empty');
  };

  // itemからemptyクラスを削除
  const removeClassEmpty = function (items) {
    items.forEach((val) => {
      val.classList.remove('empty');
    });
  };

  // input、textareaの未入力チェック
  const checkEmptyText = function (...inputs) {
    for (let input of inputs) {
      input.forEach((val, i) => {
        if (val.textContent == '') {
          console.log('未入力です');
          addClassEmpty(itemsArray, i);
        } else {
          console.log('入力されている');
          removeClassEmpty(itemsArray);
        }
      });
    }
  };
  checkEmptyText(inputsArray);
});
