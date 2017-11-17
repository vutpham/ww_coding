import React from 'react';

class SubRedditListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.displaySubreddit(this.props.name)}>
          {this.props.name}
        </div>
        <div>
          <input type="button" value="X" onClick={() => this.props.removeSelf(this.props.name)}/>
        </div>
      </div>
    );
  }
}

export default SubRedditListItem;
