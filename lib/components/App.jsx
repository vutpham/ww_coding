import React from 'react';
import axios from 'axios';
import SubRedditList from './subRedditList/subRedditList';
import SubRedditContent from './subRedditContent/subRedditContent';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currView: null,
      subredditContent: []
    };

    this.displaySubreddit = this.displaySubreddit.bind(this);
    this.displaySubredditContent = this.displaySubredditContent.bind(this);
  }

  displaySubredditContent() {
    axios.get(`http://www.reddit.com${this.state.currView}.json?limit=10`)
      .then(res => this.setState({subredditContent: res.data.data.children}));
  }


  displaySubreddit(sub) {
    this.setState({currView: sub}, () => this.displaySubredditContent());
  }

  componentDidMount () {
    // Pass currView to the subRedditDetail, pass /r/news if null
  }

  render () {
    return (
      <div className='app'>
        <SubRedditList displaySubreddit={ this.displaySubreddit } />
        <SubRedditContent subreddit={ this.state.currView }
                         subredditContent={ this.state.subredditContent }/>
      </div>
    );
  }
}

export default App;
