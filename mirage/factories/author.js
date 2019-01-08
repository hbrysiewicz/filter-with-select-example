import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`
  },

  age() {
    return faker.random.number()
  },

  isAdmin() {
    return faker.random.boolean()
  },

  status() {
    return faker.random.arrayElement([
      'New',
      'Verified',
      'Closed',
      'Under Review'
    ]);
  }
});
