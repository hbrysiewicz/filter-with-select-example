import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const columns = [
  {
    propertyName: "name",
    title: "Author",
  },
  {
    propertyName: "age",
    title: "Age"
  },
  {
    propertyName: "status",
    title: "Status",
    filterWithSelect: true,
    sortFilterOptions: true
  },
  {
    title: "Edit",
    component: "edit-row"
  }
];

export default Controller.extend({
  router: service(),

  columns,

  actions: {
    edit(record) {
      this.get('router').transitionTo('edit', record);
    }
  }
});
