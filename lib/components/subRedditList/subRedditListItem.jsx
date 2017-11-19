import React from 'react';

class SubRedditListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name;
    if (this.props.selected) {
      name = <div className='list-name'><strong>{this.props.name}</strong></div>;
    } else {
      name = <div className='list-name' onClick={() => this.props.displaySubreddit(this.props.name)}>
        {this.props.name}
      </div>;
    }
    return (
      <div className='list-item'>
        { name }
        <div>
          <input className='btn btn-xs btn-danger' type="button" value="X" onClick={() => this.props.removeSelf(this.props.name)}/>
        </div>
      </div>
    );
  }
}

export default SubRedditListItem;
