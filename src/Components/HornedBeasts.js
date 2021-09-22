import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>This horned beast is known as the {this.props.title}</h2>
        <img src={this.props.imgURL} alt='hornedBeast_img' title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
