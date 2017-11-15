import React from 'react';
import { connect } from 'react-redux';
import SubRedditList from './subRedditList/subRedditList';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currView: null
    };
  }

  displaySubreddit() {

  }

  componentDidMount () {
    // Pass currView to the subRedditDetail, pass /r/news if null
  }

  render () {
    return (
      <div className='app'>
        <SubRedditList />
      </div>
    );
  }
}

export default App;
