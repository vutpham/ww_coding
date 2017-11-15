import React from 'react';
import axios from 'axios';

import SubRedditListItem from './subRedditListItem';

class SubRedditList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          <SubRedditListItem key={`list_item_${i}`}
            name={subreddit}/>
        );
      });
  }

  updateList(res, subreddit) {
    if (res) {
      let updated = this.state.subreddits.push(subreddit);
      this.setState({subreddits: updated}, () => console.log(this.state.subreddits));
    }
  }

  printResponse(res) {
    let info = res.data.children;

    return info.map((data, i) =>{

    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let subredditInput = document.getElementById('subreddit-search').value;
    axios.get(`http://www.reddit.com/r/${subredditInput}.json?limit=10`)

    // Add the subreddit to a list
      .then(res => console.log(res))
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
