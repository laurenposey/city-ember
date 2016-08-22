import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.state', function() {
    return this.get('city.name') + ', ' + this.get('city.state');
  }),

  sortBy: ['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
});
