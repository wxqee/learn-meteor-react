import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    let {_id, subject, content} = this.props.article;

    _id = _id.toString();

    return (
      <div>
        <header>
          <h3>Subject: {subject}</h3>
        </header>
        <nav>
          <a href="javascript:void;" onClick={() => Meteor.call('articles.remove', _id)}>Delete</a>
        </nav>
        <section>
          {content}
        </section>
      </div>
    );
  }
}
