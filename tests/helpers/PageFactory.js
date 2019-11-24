import IndexPage from '../pageObjects/IndexPage';
import FlyPage from '../pageObjects/FlyPage';
import BaggageInformationPage from '../pageObjects/BaggageInformationPage';

export default class PageFactory {
  constructor() {
    this.indexPage = new IndexPage();
    this.flyPage = new FlyPage();
    this.baggageInformationPage = new BaggageInformationPage();
  }
}
