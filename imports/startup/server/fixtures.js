import { Meteor } from 'meteor/meteor';
import { Articles } from '../../api/articles/articles.js';

if (!Meteor.isProduction) {
  const articles = [
    {subject: 'Hello World', content: 'This is a hello world for Meteor + React.'},
    {subject: 'Second one', content: 'Another article.'},
  ];

  articles.forEach(({subject, content}) => {
    const articleExists = Articles.findOne({subject});

    if (!articleExists) {
      Articles.insert({subject, content});
    }
  });
}
