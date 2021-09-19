import React from 'react';
import ram from '../img/images.jpg';
import reindeer from '../img/reindeer.jpg';


class Main extends React.Component {

  render() {       
    return( 
      <> 
        <HornedBeast title={'Ram'} imgURL={ram} description={'This is a beautiful ram that lives in the Swiss Alps'}/>
        <HornedBeast title={'Reindeer'} imgURL={reindeer} description={'This is an amazing reindeer that might live in the North Pole'}/>
      </>
    );
  }
}

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>This horned beast is known as {this.props.title}</h2>
        <img src={this.props.imgURL} alt='hornedBeast_img' title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    );
  }
}


export default Main;
