import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice >= 15000) {
    return '$$$$';
  } else if (rentalPrice >= 10000) {
    return '$$$';
  } else if (rentalPrice >= 5000) {
      return '$$';
  } else if (rentalPrice <= 4999) {
      return '$';
  }
}

export default Ember.Helper.helper(rentalCost);
