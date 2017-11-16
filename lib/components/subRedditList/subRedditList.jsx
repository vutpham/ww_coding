import React from 'react';
import axios from 'axios';

import SubRedditListItem from './subRedditListItem';

class SubRedditList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      subreddits: ['/r/games', '/r/sanfrancisco', '/r/tech', '/r/fashion']
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateList = this.updateList.bind(this);
    this.printResponse = this.printResponse.bind(this);
  }

  // Maybe a component lifecycle method to handle update here
  // componentWillReceiveProps(nextProps)

  displaySubs() {
    return this.state.subreddits.length === 0 ? "Please add some SubReddits" :
      this.state.subreddits.map((subreddit, i) => {
        return (
          <div key={`list_item_${i}`}
               onClick={ () => this.props.displaySubreddit(subreddit) }>
            <SubRedditListItem name={subreddit}/>
          </div>
        );
      });
  }

// List of subreddits should only update if new subreddit is requested
  updateList(res, subreddit) {
    if (res) {
      console.log(this.state.subreddits);
      let updated = this.state.subreddits;
      if (!this.state.subreddits.includes(`/r/${subreddit}`)) updated.push(`/r/${subreddit}`);
      this.setState({subreddits: updated, searchTerm: ""}, () => console.log(this.state));
    }
  }

  printResponse(res) {
    let info = res.data.children;

    return info.map((data, i) =>{

    });
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
