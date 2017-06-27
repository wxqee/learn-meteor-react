import { Mongo } from 'meteor/mongo';

export const Articles = new Mongo.Collection('articles');

Articles.schema = new SimpleSchema({
  subject: {
    type: String,
    label: 'Subject',
  },
  content: {
    type: String,
    label: 'Content',
  },
});

Articles.schema.addValidator(() => {
  if (this.key === 'subject' && this.value.length < 6) {
    return 'Subject at least 6 characters.';
  } else if (this.key === 'content' && this.value.length < 30) {
    return 'Content at least 30 characters.';
  }
});

Articles.helpers({

});
