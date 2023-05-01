/* eslint-disable no-console */
import { isFnValue } from './key-codes';

export function keyboardToUpperCase() {
  document.querySelectorAll('[key="key"]').forEach((el) => {
    for (const child of el.children) {
      if (!child.classList.contains('hidden')) {
        child.querySelector('.caseDown').classList.toggle('hidden');
        child.querySelector('.caseUp').classList.toggle('hidden');
      }
    }
  });
}

function addSymbol(symbol) {
  const textarea = document.querySelector('.textarea');
  const newText = textarea.value.split('');
  const positionCursor = textarea.selectionEnd;
  newText.splice(positionCursor, 0, symbol);
  textarea.value = newText.join('');
  textarea.selectionStart = positionCursor + 1;
  textarea.selectionEnd = positionCursor + 1;
}

function pressBtn(val) {
  const textarea = document.querySelector('.textarea');
  const newText = textarea.value.split('');
  const positionCursor = textarea.selectionEnd;

  if (val === 'Enter') {
    addSymbol('\n');
  } else if (val === 'Space' || val === '') {
    addSymbol(' ');
  } else if (val === 'Tab') {
    addSymbol('\t');
  } else if (val === 'Del' || val === 'Delete') {
    newText.splice(positionCursor, 1);
    textarea.value = newText.join('');
    textarea.selectionStart = positionCursor;
    textarea.selectionEnd = positionCursor;
  } else if (val === 'Backspace') {
    newText.splice(positionCursor - 1, 1);
    textarea.value = newText.join('');
    textarea.selectionStart = positionCursor - 1;
    textarea.selectionEnd = positionCursor - 1;
  } else if (val === 'ArrowUp') {
    addSymbol('\u2BC5');
  } else if (val === 'ArrowDown') {
    addSymbol('\u2BC6');
  } else if (val === 'ArrowLeft') {
    addSymbol('\u2BC7');
  } else if (val === 'ArrowRight') {
    addSymbol('\u2BC8');
  } else if (val === 'CapsLock') {
    document.querySelector(`[data=${val}]`).classList.toggle('active');
    keyboardToUpperCase();
  }
}

export function mouseDownHandler(e) {
  if (!e.target.closest('.btn')) return;
  e.preventDefault();

  const currValue = e.target.closest('.btn').innerText;

  pressBtn(e.target.closest('.btn').getAttribute('data'));
  if (!isFnValue(currValue)) {
    addSymbol(currValue);
  }
}

export function keyDownHandler(e) {
  e.preventDefault();
  if (!document.querySelector(`[data=${e.code}]`)) return;
  const currEl = document.querySelector(`[data=${e.code}]`);
  if (e.code !== 'CapsLock') { currEl.classList.add('active'); }

  if (e.key === 'Shift' && !e.repeat) {
    keyboardToUpperCase();
  }

  pressBtn(e.code);

  if (!isFnValue(e.code)) {
    addSymbol(currEl.innerText);
  }
}

export function keyUpHandler(e) {
  if (!document.querySelector(`[data=${e.code}]`)) return;
  if (e.key === 'Shift') {
    document.querySelector(`[data=${e.code}]`).classList.remove('active');
    keyboardToUpperCase();
  } else if (e.key === 'CapsLock') {
    return;
  } else {
    document.querySelector(`[data=${e.code}]`).classList.remove('active');
  }
}