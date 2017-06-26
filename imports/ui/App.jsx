import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Articles } from '../api/articles/articles.js';

import Article from './Article.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world.</h1>
        {this.props.articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    articles: Articles.find({}).fetch(),
  };
}, App);
