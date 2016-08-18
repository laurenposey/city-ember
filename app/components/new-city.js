import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    saveCity() {
      var params = {
      name: this.get('name'),
      state: this.get('state')

    };
    this.set('addNewCity', false);
    this.sendAction('saveCity', params);
    }
  }
});
