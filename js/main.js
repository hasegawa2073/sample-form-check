document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const form = document.querySelector('.form');
  const items = document.querySelectorAll('.form__item');
  const itemsArray = Array.from(items);
  const inputs = document.querySelectorAll('.form__input');
  const inputsArray = Array.from(inputs);
  let emptyCount = 0;

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

  // 未入力の個数を初期化
  const resetEmptyCount = function () {
    emptyCount = 0;
    return emptyCount;
  };

  // 未入力なら+1カウント
  const plusEmptyCount = function () {
    emptyCount++;
    return emptyCount;
  };

  // すべてが入力されていたらtrueを返す
  const checkAllFilled = function () {
    if (emptyCount === 0) {
      return true;
    }
  };

  // 個別にinput、textareaの未入力チェック
  const checkEmptyText = function (target) {
    if (target.value == '') {
      console.log('未入力');
      addClassEmpty(target.id);
      plusEmptyCount();
    } else {
      console.log('入力されている');
      removeClassEmpty(target.id);
    }
  };

  // すべてのinput、textareaの未入力チェック
  const checkEmptyTextAll = function (targets) {
    for (let i = 0; i < targets.length; i++) {
      checkEmptyText(targets[i].querySelector('.form__input'));
    }
  };

  form.addEventListener('submit', function (e) {
    resetEmptyCount();
    checkEmptyTextAll(itemsArray);
    if (!checkAllFilled()) {
      e.preventDefault();
    }
  });
  form.addEventListener('focusout', function (e) {
    checkEmptyText(e.target);
  });
});
