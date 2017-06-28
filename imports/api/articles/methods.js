import { Meteor } from 'meteor/meteor';
import { Articles } from './articles.js';

Meteor.methods({
  'articles.add'(formData) {
    return Articles.insert({
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
  'articles.remove'(_id) {
    return Articles.remove(_id);
  },
  'articles.get'(filterData) {
    return Articles.find({}, filterData).fetch();
  },
});
