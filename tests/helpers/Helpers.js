import moment from 'moment';
import { t, ClientFunction } from 'testcafe';

require('dotenv').config();

export const DISPLAY_DATE_FORMAT = 'D-MM-YYYY';
export const MAX_TIMEOUT = 60000;

export const today = () => {
  const aestTime = new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
  return moment(new Date(aestTime)).format(DISPLAY_DATE_FORMAT);
};

export const futureDay = () => {
  const aestTime = new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
  const todaydate = moment(new Date(aestTime));
  // Quick Fix for now
  const inFourteenDays = todaydate.add('14', 'days');
  return inFourteenDays.format(DISPLAY_DATE_FORMAT);
};

export const getBaseUrl = () => process.env.BASE_URL;
export const getAgentAuthToken = () => process.env.AGENT_AUTH_TOKEN;

export async function waitUntilElementVisible(element) {
  await t.expect(element.with({ visibilityCheck: true }).exists).ok({ timeout: MAX_TIMEOUT });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function concatName(string1, string2) {
  const space = ' ';
  return string1 + space + string2;
}

export const setSessionStorage = ClientFunction((key, val) => sessionStorage.setItem(key, val));
