document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const form = document.querySelector('.form');
  const items = document.querySelectorAll('.form__item');
  const itemsArray = Array.from(items);
  const inputs = document.querySelectorAll('.form__input');
  const inputsArray = Array.from(inputs);
  const submit = document.querySelector('.submit');

  const inputsAssocArray = new Array();
  inputsArray.map((val) => {
    inputsAssocArray[val.id] = val;
  });

  // 未入力のitemにemptyクラスを付与
  const addClassEmpty = function (key) {
    itemsArray.map((val) => {
      if (val.classList.contains(key)) {
        val.classList.add('empty');
      }
    });
  };

  // 入力されているitemからemptyクラスを削除
  const removeClassEmpty = function (key) {
    itemsArray.map((val) => {
      if (val.classList.contains(key)) {
        val.classList.remove('empty');
      }
    });
  };

  // input、textareaの未入力チェック
  const checkEmptyText = function (target) {
    if (target.value == '') {
      console.log('未入力');
      addClassEmpty(target.id);
    } else {
      console.log('入力されている');
      removeClassEmpty(target.id);
    }
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);
  });
  form.addEventListener('focusout', function (e) {
    checkEmptyText(e.target);
  });
});
