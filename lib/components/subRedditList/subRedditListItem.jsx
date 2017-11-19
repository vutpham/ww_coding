import React from 'react';

class SubRedditListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='list-item'>
        <div className='list-name' onClick={() => this.props.displaySubreddit(this.props.name)}>
          {this.props.name}
        </div>
        <div>
          <input className='btn btn-xs btn-danger' type="button" value="X" onClick={() => this.props.removeSelf(this.props.name)}/>
        </div>
      </div>
    );
  }
}

export default SubRedditListItem;
