/* eslint-disable no-console */
import {
  getBaseUrl,
  waitUntilElementVisible,
  concatName,
  capitalizeFirstLetter,
} from '../../../helpers/Helpers';
import { t } from 'testcafe';
import PageFactory from '../../../helpers/PageFactory';

const baseURL = getBaseUrl();
const pageFactory = new PageFactory();

fixture`Fly Baggage Allowance Test`.meta('user', 'customer').page(`${baseURL}`);

test.meta('testID', 'T101').meta({
  severity: 'critical',
  epic: 'fly',
  journey: 'domestic',
  product: 'baggage',
})('T101_Baggage_Allowance_Domestic', async t => {
  // Click Fly href
  await waitUntilElementVisible(pageFactory.indexPage.flyHref);
  await t.click(pageFactory.indexPage.flyHref);

  await waitUntilElementVisible(pageFactory.flyPage.baggageHref);
  await t.click(pageFactory.flyPage.baggageHref);

  await waitUntilElementVisible(pageFactory.baggageInformationPage.existingBookingButton);
  await t.click(pageFactory.baggageInformationPage.existingBookingButton);

  await pageFactory.baggageInformationPage.lookupDestination('Brisbane');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Economy'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Premium Economy'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Business'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
  await t.click(pageFactory.baggageInformationPage.classDropDown('First'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
});

test.meta('testID', 'T102').meta({
  severity: 'critical',
  epic: 'fly',
  journey: 'international',
  product: 'baggage',
})('T102_Baggage_Allowance_International', async t => {
  // Click Fly href
  await waitUntilElementVisible(pageFactory.indexPage.flyHref);
  await t.click(pageFactory.indexPage.flyHref);

  await waitUntilElementVisible(pageFactory.flyPage.baggageHref);
  await t.click(pageFactory.flyPage.baggageHref);

  await waitUntilElementVisible(pageFactory.baggageInformationPage.existingBookingButton);
  await t.click(pageFactory.baggageInformationPage.existingBookingButton);

  await pageFactory.baggageInformationPage.lookupDestination('Dubai');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Premium Economy'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Business'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
  await t.click(pageFactory.baggageInformationPage.classDropDown('First'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('One piece upto 10kg');
});

test.meta('testID', 'T103').meta({
  severity: 'critical',
  epic: 'fly',
  journey: 'international',
  product: 'baggage',
})('T103_Baggage_Allowance_International_Economy', async t => {
  // Click Fly href
  await waitUntilElementVisible(pageFactory.indexPage.flyHref);
  await t.click(pageFactory.indexPage.flyHref);

  await waitUntilElementVisible(pageFactory.flyPage.baggageHref);
  await t.click(pageFactory.flyPage.baggageHref);

  await waitUntilElementVisible(pageFactory.baggageInformationPage.existingBookingButton);
  await t.click(pageFactory.baggageInformationPage.existingBookingButton);

  await pageFactory.baggageInformationPage.lookupDestination('Dubai');
  await t.click(pageFactory.baggageInformationPage.classDropDown('Economy'));
  await t.click(pageFactory.baggageInformationPage.baggageAllowanceButton);
  await t.expect(pageFactory.baggageInformationPage.carryOnAllowance.innerText)
        .contains('Max 7kg per bag');
});



