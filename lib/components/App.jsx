import React from 'react';
import axios from 'axios';
import SubRedditList from './subRedditList/subRedditList';
import SubRedditContent from './subRedditContent/subRedditContent';
import Title from './title';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currView: '/r/news',
      subredditContent: []
    };

    this.displaySubreddit = this.displaySubreddit.bind(this);
    this.displaySubredditContent = this.displaySubredditContent.bind(this);
  }

  displaySubredditContent() {
    if (this.state.currView === null) {
      axios.get(`http://www.reddit.com/r/news.json?limit=10`)
      .then(res => this.setState({subredditContent: res.data.data.children.filter((item) => !item.data.stickied)}, () => console.log(this.state.subredditContent)));
    } else {
      axios.get(`http://www.reddit.com${this.state.currView}.json?limit=10`)
      .then(res => this.setState({subredditContent: res.data.data.children.filter((item) => !item.data.stickied)}, () => console.log(this.state.subredditContent)));
    }
  }


  displaySubreddit(sub) {
    this.setState({currView: sub}, () => this.displaySubredditContent());
  }

  componentDidMount () {
    // Pass currView to the subRedditDetail, pass /r/news if null
    this.displaySubredditContent();
  }

  render () {
    return (
      <div className='container'>
        <Title />
        <div className='main-content'>
          <div className='subreddit-list'>
            <SubRedditList displaySubreddit={ this.displaySubreddit } />
          </div>
          <div className='content'>
            <SubRedditContent subreddit={ this.state.currView }
                         subredditContent={ this.state.subredditContent }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
