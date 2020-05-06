import React,{Component} from 'react';

import {Link} from "react-router-dom";
import Menu from './MenuComponent.js';
import {DISHES} from '../shared/dishes';
import Details from './DetailComponent.js';
import Book from './bookcomponent.js';


import Home from './HomeComponent.js';
import Header from'./HeaderComponent.js';
import Footer from'./FooterComponent.js';
import {Switch,Route, Redirect} from 'react-router-dom';
class Main extends Component {

  constructor (props){
    super(props);
    this.state={
      dishes :DISHES,
    };
  }
  render(){
    const HomePage= ()=>{
      return (
        <Home/>
        );
    }
  return (

    <div >
      
<Header />
<Switch>
  <Route path="/home" component={HomePage} />
  // above approach of passing component does not allow us to pass props
  // if we have to pass props along with the componenet then we have to bind it in as functional component
  <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
  <Redirect to="/home"  />
</Switch>   
<Footer />
  
</div>

  );
}
}

export default Main;