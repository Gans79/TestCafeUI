import { Selector } from 'testcafe';

export const bodySelector = () => Selector('body');
export const ulSelector = () => Selector('ul');
export const quoteSelector = () => Selector('p').nextSibling('strong');
export const anchorSelector = text => Selector('a').withText(text);
export const hrefSelector = text => Selector('a').withText(text);
export const divSelector = text => Selector('div').withText(text);

export const buttonSelector = text =>
  Selector('button').withText(text);
export const errorMessageSelector = element => element.nextSibling('div');
export const selectErrorMessageSelector = element => element.parent('div').nextSibling('div');
export const tableCellSelector = () =>
  Selector('td')
    .withAttribute('aria-disabled', 'false')
    .nth(0);

export const liSelector = element => element.child('li');
export const loginButtonSelector = () => Selector('button').withText('Log in');
export const policyNumberSelector = () => Selector('div').withText('Your Policy number');

export const switchMonthButton = text =>
  Selector('div')
    .withAttribute('aria-label', text)
    .child('svg');

export const textFieldSelector = text =>
  Selector('label')
    .withText(text)
    .parent('div')
    .sibling('input');

export const textSelector = text =>
  Selector('label')
    .withText(text)
    .sibling('input');

export const datePickerSelector = text =>
  Selector('label')
    .withText(text)
    .parent('div')
    .sibling('div')
    .child('div')
    .child('div')
    .child('div')
    .child('input');

export const loginTextFieldSelector = text =>
  Selector('label')
    .withText(text)
    .sibling('input');

export const radioButtonSelector = text =>
  Selector('input')
    .withAttribute('type', 'radio')
    .nextSibling('label')
    .withText(text);

export const radioSelector = text =>
  Selector('input')
    .withAttribute('type', 'radio')
    .nextSibling('label')
    .withText(text);

export const selectSelector = text =>
  Selector('label')
    .withText(text)
    .parent('div')
    .sibling('div')
    .child('select');

export const h1Selector = text =>
  Selector('table')
    .parent('div')
    .prevSibling('h1')
    .withText(text);

export const selectOptionSelector = element => element.find('option');

export const checkBoxSelector = text =>
  Selector('label')
    .withText(text)
    .sibling('input')
    .withAttribute('type', 'checkbox');

export const radioButtonWithLegendSelector = (legendText, labelText) =>
  Selector('legend')
    .withText(legendText)
    .sibling('div')
    .child('div')
    .child('label')
    .withText(labelText);

export const radioWithLegendSelector = (legendText, labelText) =>
  Selector('legend')
    .withText(legendText)
    .sibling('div')
    .child('label')
    .child('span')
    .withText(labelText);
