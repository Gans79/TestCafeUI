import { radioSelector,textSelector,ulSelector,buttonSelector,liSelector,divSelector }
       from '../helpers/Selector';
import { t } from 'testcafe';

export default class BaggageInformationPage {
  constructor() {
    //this.existingBookingButton = labelText => radioWithLegendSelector(/Do you have an existing booking?/, No);
    this.existingBookingButton = radioSelector('No');
    this.fromInput = textSelector(/From/);
    this.toInput = textSelector(/To/);
    this.destinationDropDown = ulSelector();
    this.dropDownListSelection = liSelector(this.destinationDropDown);
    this.classDropDown = text => ulSelector(text);
    this.baggageAllowanceButton = text=> buttonSelector('SEE BAGGAGE ALLOWANCE');
    this.carryOnAllowance =text => divSelector(text);
  }

  async lookupDestination(Destination) {
    await t
      .typeText(this.toInput, Destination, { speed: 0.5 })
      .hover(this.destinationDropDown)
      .click(this.dropDownListSelection.nth(0))
  }
}
