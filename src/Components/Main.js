import React from 'react';
import HornedBeast from './HornedBeasts.js';
import ram from '../img/images.jpg';
import reindeer from '../img/reindeer.jpg';


class Main extends React.Component {

  render() {       
    return( 
      <> 
        <HornedBeast title={'Ram'} imgURL={ram} description={'This is a beautiful ram that lives in the Swiss Alps'}/>
        <HornedBeast title={'Reindeer'} imgURL={reindeer} description={'This is an amazing reindeer that might reside in the North Pole?'}/>
      </>
    );
  }
}



export default Main;
