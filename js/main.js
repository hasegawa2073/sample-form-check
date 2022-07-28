document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const form = document.querySelector('.form');
  const items = document.querySelectorAll('.form__item');
  const itemsArray = Array.from(items);
  const inputs = document.querySelectorAll('.form__input');
  const inputsArray = Array.from(inputs);
  const submit = document.querySelector('.submit');

  // 未入力のitemにemptyクラスを付与
  const addClassEmpty = function (items, i) {
    items[i].classList.add('empty');
  };

  // 入力されているitemからemptyクラスを削除
  const removeClassEmpty = function (items, i) {
    items[i].classList.remove('empty');
  };

  // input、textareaの未入力チェック
  const checkEmptyText = function (...inputs) {
    for (let input of inputs) {
      input.forEach((val, i) => {
        if (val.value == '') {
          addClassEmpty(itemsArray, i);
        } else {
          removeClassEmpty(itemsArray, i);
        }
      });
    }
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkEmptyText(e.path[0].querySelectorAll('.form__input'));
  });
});
