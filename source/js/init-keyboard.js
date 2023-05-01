import eventsOnButtons from './events';
import { isFnValue, correctTextInFnBtns } from './key-codes';
import en from './english-key';
import ru from './russian-key';

function createElement(
  elem,
  text,
  innerHTML,
  classes,
  attr,
  attrValue = null,
  otherAttr = null,
  otherAttrValue = null,
) {
  const el = document.createElement(elem);
  if (text) el.append(text);
  if (innerHTML) el.append(...innerHTML);
  if (classes) el.classList.add(...classes.split(' '));
  if (attr && attrValue) { el.setAttribute(attr, attrValue); }
  if (otherAttr && otherAttrValue) { el.setAttribute(otherAttr, otherAttrValue); }
  return el;
}

document.title = 'Virtual Keyboard';
document.body.append(createElement('h1', 'RSS Виртуальная клавиатура', null, 'title'));
document.body.append(createElement('textarea', null, null, 'textarea', 'id', 'textarea', 'placeholder', 'Print me'));

function changeLanguageInLocalStorage() {
  if (localStorage.lang === 'en') {
    localStorage.setItem('lang', 'ru');
  } else if (localStorage.lang === 'ru') {
    localStorage.setItem('lang', 'en');
  }
}

function defLangEn(str) {
  if (localStorage.lang === str) return 'langEn';
  return 'hidden';
}

function createMarkup() {
  document.body.append(createElement('div', null, null, 'keyboard'));
  const eng = en.flat();
  const rus = ru.flat();

  for (let i = 0; i < eng.length; i++) {
    const elemEn = eng[i];
    const elemRu = rus[i];

    const enTextObj = (isFnValue(elemEn.code))
      ? `${correctTextInFnBtns(elemEn)}`
      : elemEn;

    const ruTextObj = (isFnValue(elemRu.code))
      ? `${correctTextInFnBtns(elemRu)}`
      : elemRu;

    const markupElement = createElement(
      'div',
      null,
      [
        createElement(
          'div',
          null,
          [
            createElement('span', null, `${(isFnValue(elemEn.code)) ? (enTextObj.key || enTextObj) : ruTextObj.key}`, `caseDown ${defLangEn('ru')}`),
            createElement('span', null, `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ((ruTextObj.hasOwnProperty('secondValue')) ? ruTextObj.secondValue : ruTextObj.key.toUpperCase())}`, 'caseUp hidden'),
            createElement('span', null, `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ruTextObj.key.toUpperCase()}`, 'caps hidden'),
            createElement('span', null, `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ((ruTextObj.hasOwnProperty('secondValue')) ? ruTextObj.secondValue : ruTextObj.key)}`, 'shiftCaps hidden'),
          ],
          `ru ${defLangEn('ru')}`,
        ),

        createElement(
          'div',
          null,
          [
            createElement('span', null, `${enTextObj.key || enTextObj}`, `caseDown ${defLangEn('en')}`),
            createElement('span', null, `${(isFnValue(elemRu.code)) ? enTextObj.key || enTextObj : ((enTextObj.hasOwnProperty('secondValue')) ? enTextObj.secondValue : enTextObj.key.toUpperCase())}`, 'caseUp hidden'),
            createElement('span', null, `${(isFnValue(elemRu.code)) ? enTextObj.key || enTextObj : enTextObj.key.toUpperCase()}`, 'caps hidden'),
            createElement('span', null, `${enTextObj.key || enTextObj}`, 'shiftCaps hidden'),
          ],
          `en ${defLangEn('en')}`,
        ),
      ],
      isFnValue(elemEn.code) ? 'btn fn' : 'btn',
      'data',
      elemEn.code,
      'key',
      isFnValue(elemEn.code) ? 'fn' : 'key',
    );
    document.querySelector('.keyboard').append(markupElement);
  }
}

function changeLanguageMarkup() {
  const ruKeys = document.querySelectorAll('.ru');
  ruKeys.forEach((el) => el.classList.toggle('hidden'));
  const enKeys = document.querySelectorAll('.en');
  enKeys.forEach((el) => el.classList.toggle('hidden'));
  const caseDown = document.querySelectorAll('.caseDown');
  caseDown.forEach((el) => el.classList.toggle('hidden'));
}

function changeLanguage() {
  const pressedKeys = new Set();
  const keysForChangingLanguage = ['Control', 'Alt'];

  document.addEventListener('keydown', (event) => {
    pressedKeys.add(event.key);
    for (const key of keysForChangingLanguage) {
      if (!pressedKeys.has(key)) {
        return;
      }
    }
    pressedKeys.clear();
    changeLanguageInLocalStorage();
    changeLanguageMarkup();
  });
  document.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.key);
  });
}

function initKeyboard() {
  createMarkup();
  changeLanguage();
  eventsOnButtons();
}

initKeyboard();

document.body.append(createElement('p', 'Клавиатура создана в операционной системе Windows', null));
document.body.append(createElement('p', 'Для переключения языка комбинация: левыe ctrl + alt', null));