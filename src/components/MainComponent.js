import React,{Component} from 'react';

import {Link} from "react-router-dom";
import Menu from './MenuComponent.js';
import {DISHES} from '../shared/dishes';
//import {COMMENTS} from '../shared/comments';
//import {LEADERS} from '../shared/leaders';



//import {PROMOTIONS} from '../shared/promotions';
import Details from './DetailComponent.js';
import Home from './HomeComponent.js';
import Header from'./HeaderComponent.js';
import Footer from'./FooterComponent.js';
import Contact from './ContactComponent'
//import {Switch,Route, Redirect} from 'react-router-dom';
//USE OF withRouter for to config recat compo with redux  store
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor (props){
    super(props);
    //this.state={
      //dishes :DISHES,
      //comments:COMMENTS,
      //promotions:PROMOTIONS,
      //leaders : LEADERS
    //};
  }
  render(){
    // we have a paramter name featured in every shared  file json objects, Only oblects with featured value being true are used to dispaly on home page 
    const HomePage= ()=>{
      return (
        <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
        );
    }
    const DishWithId = ({match})=>{
      return (
        <Details dish={this.props.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />

        );

    }
  return (

    <div >
      
<Header />
<Switch>
  <Route path="/home" component={HomePage} />
  // above approach of passing component does not allow us to pass props
  // if we have to pass props along with the componenet then we have to bind it in as functional component
  <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
  <Route path="/menu/:dishId" component ={DishWithId} />
  <Route excat path="/contactus" component ={Contact} />
  <Redirect to="/home"  />
</Switch>   
<Footer />
  
</div>

  );
}
}
export default withRouter(connect(mapStateToProps)(Main));