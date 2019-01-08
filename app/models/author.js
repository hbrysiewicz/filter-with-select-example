import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  isAdmin: DS.attr('boolean'),
  status: DS.attr('string')
});
