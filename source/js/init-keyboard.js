import eventsOnButtons from './events';
import { isFnValue, correctTextInFnBtns } from './key-codes';
import en from './english-key';
import ru from './russian-key';

function createElement(
  elem,
  innerHTML,
  classes,
  attr,
  attrValue = null,
  otherAttr = null,
  otherAttrValue = null,
) {
  const el = document.createElement(elem);
  if (innerHTML) el.append(...innerHTML);
  if (classes) el.classList.add(...classes.split(' '));
  if (attr && attrValue) { el.setAttribute(attr, attrValue); }
  if (otherAttr && otherAttrValue) { el.setAttribute(otherAttr, otherAttrValue); }
  return el;
}

document.title = 'Virtual Keyboard';
document.body.append(createElement('h1', 'RSS Виртуальная клавиатура', 'title'));
document.body.append(createElement('textarea', null, 'textarea', 'id', 'textarea', 'placeholder', 'Print me'));

function defLangEn(str) {
  if (localStorage.lang === str) return 'langEn';
  return 'hidden';
}

function createMarkup() {
  document.body.append(createElement('div', null, 'keyboard'));
  const ENG = en.flat();
  const RUS = ru.flat();

  for (let i = 0; i < ENG.length; i++) {
    const elemEn = ENG[i];
    const elemRu = RUS[i];

    const enTextObj = (isFnValue(elemEn.code))
      ? `${correctTextInFnBtns(elemEn)}`
      : elemEn;

    const ruTextObj = (isFnValue(elemRu.code))
      ? `${correctTextInFnBtns(elemRu)}`
      : elemRu;

    const markupElement = createElement(
      'div',
      [
        createElement(
          'div',
          [
            createElement('span', `${(isFnValue(elemEn.code)) ? (enTextObj.key || enTextObj) : ruTextObj.key}`, `caseDown ${defLangEn('ru')}`),
            createElement('span', `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ((ruTextObj.hasOwnProperty('secondValue')) ? ruTextObj.secondValue : ruTextObj.key.toUpperCase())}`, 'caseUp hidden'),
            createElement('span', `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ruTextObj.key.toUpperCase()}`, 'caps hidden'),
            createElement('span', `${(isFnValue(elemEn.code)) ? enTextObj.key || enTextObj : ((ruTextObj.hasOwnProperty('secondValue')) ? ruTextObj.secondValue : ruTextObj.key)}`, 'shiftCaps hidden'),
          ],
          `ru ${defLangEn('ru')}`,
        ),

        createElement(
          'div',
          [
            createElement('span', `${enTextObj.key || enTextObj}`, `caseDown ${defLangEn('en')}`),
            createElement('span', `${(isFnValue(elemRu.code)) ? enTextObj.key || enTextObj : ((enTextObj.hasOwnProperty('secondValue')) ? enTextObj.secondValue : enTextObj.key.toUpperCase())}`, 'caseUp hidden'),
            createElement('span', `${(isFnValue(elemRu.code)) ? enTextObj.key || enTextObj : enTextObj.key.toUpperCase()}`, 'caps hidden'),
            createElement('span', `${enTextObj.key || enTextObj}`, 'shiftCaps hidden'),
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

function init() {
  createMarkup();
  eventsOnButtons();
}

init();

document.body.append(createElement('p', 'Клавиатура создана в операционной системе Windows'));
document.body.append(createElement('p', 'Для переключения языка комбинация: левыe ctrl + alt'));