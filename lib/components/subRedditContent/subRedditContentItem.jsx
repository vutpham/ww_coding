import React from 'react';

class SubRedditContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, permalink, comments, upvote, url } = this.props;
    return (
      <div>
        <div>{ upvote }</div>
        <div>
          <h4><a href={`${ url }`}>{ title }</a></h4>
          <p><a href={`https://www.reddit.com${permalink}`}>{ comments } comments</a></p>
        </div>
      </div>
    );
  }
}

export default SubRedditContentItem;
