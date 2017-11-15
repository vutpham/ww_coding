import React from 'react';
import { connect } from 'react-redux';
import { startUpAction } from '../actions/startUpActions';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    setTimeout(this.props.startUpAction.bind(this), 1000);
  }

  render () {
    return (
      <div className='app'>
        SIMPLE REACT BOILERPLATE
      </div>
    );
  }
}

// CONTAINER COMPONENTS

const mapStateToProps = ({startUp}) => ({
  startUp: startUp.success
});

const mapDispatchToProps = dispatch => ({
  startUpAction: () => dispatch(startUpAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
