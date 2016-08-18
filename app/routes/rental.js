import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyCity(city) {
    var rental_deletions = city.get('rentals').map(function(rental) {
      return rental.destroyRecord();
    });
    Ember.RSVP.all(rental_deletions).then(function() {
      return city.destroyRecord();
    });
    this.transitionTo('index');
  }
  }
});
