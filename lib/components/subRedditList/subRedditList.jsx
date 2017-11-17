import React from 'react';
import axios from 'axios';

import SubRedditListItem from './subRedditListItem';

class SubRedditList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      subreddits: ['/r/news']
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateList = this.updateList.bind(this);
    this.removeSelf = this.removeSelf.bind(this);
  }

  // Maybe a component lifecycle method to handle update here
  // componentWillReceiveProps(nextProps)

  displaySubs() {
    return this.state.subreddits.length === 0 ? "Please add some SubReddits" :
      this.state.subreddits.map((subreddit, i) => {
        return (
            <SubRedditListItem name={subreddit}
               displaySubreddit={this.props.displaySubreddit}
               removeSelf={ this.removeSelf }
               key={`list_item_${i}`} />
        );
      });
  }

  removeSelf(name) {
    if (confirm("Are you sure?")) {
      let subs = this.state.subreddits;
      subs.splice(subs.indexOf(name), 1);
      this.setState({subreddits: subs}, () => console.log(this.state.subreddits));
    }
  }

// List of subreddits should only update if new subreddit is requested
  updateList(res, subreddit) {
    if (res) {
      let updated = this.state.subreddits;
      if (!this.state.subreddits.includes(`/r/${subreddit}`)) updated.push(`/r/${subreddit}`);
      this.setState({subreddits: updated, searchTerm: ""});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.searchTerm = document.getElementById('subreddit-search').value;
    axios.get(`http://www.reddit.com/r/${this.state.searchTerm}.json?limit=10`)

    // If there is a response,
    // then update this.state.subreddits with subredditInput
      .then(res => this.updateList(res, this.state.searchTerm))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <h2>SubReddits</h2>
            <input type="text" placeholder="Search subreddit" id="subreddit-search"/>
            <input type='submit' value="Submit"/>
          </form>
        { this.displaySubs() }
      </div>
    );
  }
}

export default SubRedditList;
