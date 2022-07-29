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
    itemsArray.forEach((val) => {
      if (val.classList.contains(key)) {
        val.classList.add('empty');
      }
    });
  };
  // 入力されているitemからemptyクラスを削除
  const removeClassEmpty = function (key) {
    itemsArray.forEach((val) => {
      if (val.classList.contains(key)) {
        val.classList.remove('empty');
      }
    });
  };

  // フォーマットが不正なときはクラスを追加
  const addClassErrorFormat = function (key) {
    itemsArray.forEach((val) => {
      if (val.classList.contains(key)) {
        val.classList.add('error-format');
      }
    });
  };
  // フォーマットが正しければクラスを削除
  const removeClassErrorFormat = function (key) {
    itemsArray.forEach((val) => {
      if (val.classList.contains(key)) {
        val.classList.remove('error-format');
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

  // フォーマットのチェック
  const checkFormatText = function (target) {
    switch (target.id) {
      case 'name':
        if (target.value.match(/^[^ -~｡-ﾟ]+$/)) {
          removeClassErrorFormat(target.id);
        } else {
          addClassErrorFormat(target.id);
        }
        break;
      case 'kana':
        if (target.value.match(/^[\u3040-\u309F]+$/)) {
          removeClassErrorFormat(target.id);
        } else {
          addClassErrorFormat(target.id);
        }
        break;
      case 'tel':
        if (target.value.match(/^[0-9]*$/)) {
          removeClassErrorFormat(target.id);
        } else {
          addClassErrorFormat(target.id);
        }
        break;
      case 'email':
        if (
          target.value.match(
            /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
          )
        ) {
          removeClassErrorFormat(target.id);
        } else {
          addClassErrorFormat(target.id);
        }
        break;

      default:
        break;
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
      checkFormatText(target);
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
  form.addEventListener('input', function (e) {
    checkFormatText(e.target);
  });
  form.addEventListener('focusout', function (e) {
    checkEmptyText(e.target);
  });
});
