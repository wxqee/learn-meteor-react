import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    return (
      <div>
        <header>
          <h3>Subject: {this.props.article.subject}</h3>
        </header>
        <section>
          {this.props.article.content}
        </section>
        <footer>
          ------华丽的分割线------
        </footer>
      </div>
    );
  }
}
