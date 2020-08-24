import React from 'react';

class Anime extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      action: true
    }
  }
  
  render () {
    return (
      <div>
        {this.props.aa}
      </div>
    )
  }
}
export default Anime;