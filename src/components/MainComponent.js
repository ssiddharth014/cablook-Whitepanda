import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent.js';
import {DISHES} from '../shared/dishes';
import Details from './DetailComponent.js';
import Book from './bookcomponent.js';
class Main extends Component {

  constructor (props){
    super(props);
    this.state={
      dishes :DISHES,
      selectedDish :null
    };
  }

  onDishSelect(dishId)
      {
            this.setState({


                  selectedDish:dishId
            });
      }
  render(){
  return (

    <div >
      
<Navbar dark color="primary">
<div className="container">
<NavbarBrand href ="/"> sidd </NavbarBrand>
</div>
</Navbar>
<Menu dishes={this.state.dishes}  onClick={ (dishId)=>this.onDishSelect(dishId)}/>

   <Details dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> 
</div>

  
  );
}
}

export default Main;