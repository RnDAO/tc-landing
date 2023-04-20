import * as amplitude from '@amplitude/analytics-browser';

export default ({ app }, inject) => {
  inject('amplitude', amplitude);
};
