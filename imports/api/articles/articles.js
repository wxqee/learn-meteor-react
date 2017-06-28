import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

export const Articles = new Mongo.Collection('articles');

Articles.schema = new SimpleSchema({
  subject: {
    type: String,
    label: 'Subject',
    custom: function() {
      if (this.value.toString().length < 6) {
        return "too_short";
      }
    }
  },
  content: {
    type: String,
    label: 'Content',
  },
});

Articles.schema.addValidator(function() {

});

Articles.attachSchema(Articles.schema);

Articles.helpers({

});
