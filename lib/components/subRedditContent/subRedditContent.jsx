import React from 'react';
import axios from 'axios';
import SubRedditContentItem from './subRedditContentItem';

class SubRedditContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: this.props.subreddit
    };

    this.displayContent = this.displayContent.bind(this);
  }

  displayContent() {
    if (this.props.subredditContent.length) {
      console.log(this.props.subredditContent);
      return this.props.subredditContent.map((item, i) => {
        return (
          <SubRedditContentItem key={`subreddit_content_${i}`}
            title={item.data.title}
            permalink={item.data.permalink}
            comments={item.data.num_comments}
            upvote={item.data.ups}
            url={item.data.url}/>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{ this.props.subreddit }</h2>
          { this.displayContent() }
      </div>
    );
  }
}

export default SubRedditContent;
