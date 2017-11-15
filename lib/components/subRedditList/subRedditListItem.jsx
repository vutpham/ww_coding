import React from 'react';

class SubRedditListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default SubRedditListItem;
