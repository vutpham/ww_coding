import React from 'react';
import { connect } from 'react-redux';
import SubRedditList from './subRedditList/subRedditList';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currView: null
    };

    this.displaySubreddit = this.displaySubreddit.bind(this);
  }

  displaySubreddit(sub) {
    this.setState({currView: sub}, () => console.log(this.state.currView));
  }

  componentDidMount () {
    // Pass currView to the subRedditDetail, pass /r/news if null
  }

  render () {
    return (
      <div className='app'>
        <SubRedditList displaySubreddit={ this.displaySubreddit }/>
      </div>
    );
  }
}

export default App;
