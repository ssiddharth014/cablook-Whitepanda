import React,{Component} from 'react';

import {Link} from "react-router-dom";
import Menu from './MenuComponent.js';
import {CARS} from '../shared/cars';

import Details from './DetailComponent.js';
import Header from'./HeaderComponent.js';
import Footer from'./FooterComponent.js';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addBooking } from '../redux/ActionCreators';
import {status} from '../redux/ActionCreators';
const mapStateToProps = state => {
  return {
    cars: state.cars,
    bookings: state.bookings,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
    addBooking: (carId,firstname,lastname,email,telnumber,issue,ret) => dispatch(addBooking(carId,firstname,lastname,email,telnumber,issue,ret)),
   status :(carId)=>dispatch(status(carId))
  });


class Main extends Component {

  constructor (props){
    super(props);
    
  }
  render(){
    // we have a paramter name featured in every shared  file json objects, Only oblects with featured value being true are used to dispaly on home page 
    
    const CarWithId = ({match})=>{
      return (
        <Details car={this.props.cars.filter((car)=> car.id===parseInt(match.params.carId,10))[0]} 
        bookings={this.props.bookings.filter((booking)=>booking.carId===parseInt(match.params.carId,10))}
         addBooking={this.props.addBooking}
         status={this.props.status}
        />

        );

    }
  return (

    <div >
      
<Header />
<Switch>
  // above approach of passing component does not allow us to pass props
  // if we have to pass props along with the componenet then we have to bind it in as functional component
  <Route exact path="/menu" component={()=> <Menu cars={this.props.cars} />} />
  <Route path="/menu/:carId" component ={CarWithId} />
  <Route excat path="/contactus" component ={Contact} />

  <Redirect to="/menu"  />
</Switch>   
<Footer />
  
</div>

  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));