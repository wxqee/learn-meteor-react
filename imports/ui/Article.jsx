import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    let {_id, subject, content} = this.props.article;

    _id = _id.toString();

    return (
      <div>
        <header>
          <h3>Subject: ({_id}) {subject}</h3>
        </header>
        <section>
          {content}
        </section>
        <footer>
          ------华丽的分割线------
        </footer>
      </div>
    );
  }
}
