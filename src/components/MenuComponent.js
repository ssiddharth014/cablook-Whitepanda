import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Card,CardImg,CardImgOverlay,Nav,NavItem, 
  CardText,Button, CardBody,CardTitle,Breadcrumb, BreadcrumbItem,
Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import Details from './DetailComponent.js'
	
import {Control,LocalForm,Errors,Field} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const dateObj= new Date();
const month=dateObj.getUTCMonth() + 1;
const day=dateObj.getUTCDate();
const year=dateObj.getFullYear();
const date= year+'-'+month+'-'+day; 
const isdate=(d)=>d && (d>=date);

      function RenderMenuItem( {car ,addBooking,onClick}){


  return(

<Card>
<Link to ={`/menu/${car.id}`} >
                              <CardImg  width="200%" height="100%" src={car.image} alt={car.name}  />
                <CardBody body className=" ml-5 ">
                    <CardTitle className="ml-2 font-italic"><i class="fas fa-car"></i>{car.name} 
                    </CardTitle>
                    <CardTitle className="ml-2 font-italic"><i class="fas fa-rupee-sign"></i>{car.price}</CardTitle>
                    <CardTitle className="ml-2 font-italic"><i class="fas fa-user-friends"></i>{car.people}</CardTitle>
            
                    <CardTitle className="ml-2 font-italic"><i class="fas fa-paint-brush">{car.color}</i></CardTitle>
                    <Button class="btn btn-primary">Details</Button>
                   
            </CardBody>
  </Link>
  <CardTitle>
                    





                    {car.bookingStatus==true &&
                      <div>
                      <h5 className="text-danger">Booking Unavailable</h5>
                      <h5 className="text-danger">Try later...</h5>
                       <Button className="btn-primary">Book</Button>
                       </div>
                    } 
                    </CardTitle>
  <CardTitle>
                    {car.bookingStatus==false &&
                      <div className="justify-content-center">
                       <h5 className="text-success">Booking Available</h5>
                       <h5 className="text-success">View and Book..</h5>
                       
                       <Link to ={`/menu/${car.id}`} ><Button className="btn-primary">Book</Button></Link>
                      </div>
                       
                    } 
  </CardTitle>






  </Card>






      );
  




      }
      const Menu=(props) =>{



            const menu = props.cars.map((car)=>{
                        return (
                              
                              <div key={car.id} className="col-12 col-md-5 m-1">
                              <RenderMenuItem car={car} 
                              addBooking={props.addBooking}  />
                              </div>
                              );
                  });







            return(


                  <div className="container">
                  <div className="row ">
                  <Breadcrumb>
                       <BreadcrumbItem><Link to='/home'>Home </Link> </BreadcrumbItem>
                       <BreadcrumbItem active> Menu</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                  <h3>Menu</h3>
                  </div>
                  </div>
                        <div className="row ">
                         {menu}
                        </div>
   
                  </div>

                  );




      }
  

                  
export default Menu;