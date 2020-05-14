import React,{Component} from 'react';
import {Card,CardImg, CardText, CardBody,CardTitle,
    Button,Breadcrumb, BreadcrumbItem,Modal, ModalHeader,
     ModalBody, Row, Col, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors,Field} from 'react-redux-form';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
let dateObj= new Date();
let month=dateObj.getUTCMonth() + 1;
if(month<10)
{
    month='0'+month;
}
let day=dateObj.getUTCDate();
if(day<10)
{
    day='0'+day;
}
let year=dateObj.getFullYear();
const date= year+'-'+month+'-'+day; 
const isdate=(d)=>d && (d>=date);
 function RenderCar({car})
 {
 	return(
    <div className="col-lg-12 col-xs-6 m-1">
  
        <Card>


            <CardImg  width="200%" src={car.image} alt={car.name}  />
                <CardBody body className=" ml-5 ">
                    <CardTitle > {car.name} 
                    </CardTitle>
                    <CardText> {car.description} 
                    </CardText> 
                    <CardTitle >Model: {car.model} 
                    </CardTitle>
                    <CardTitle >Number: {car.number} 
                    </CardTitle>
                    <CardTitle >Category: {car.category} 
                    </CardTitle>
                    <CardTitle >Color: {car.color} 
                    </CardTitle>
                    <CardTitle >Price: {car.price} 
                    </CardTitle>
        
            </CardBody>

        </Card>

    </div>

 		);
 }

 function RenderBookings({bookings,addBooking,carId,car,status})
 {
    if(bookings!=null)
        return(
        <div className="col-md-5 col-12 m-1">
        <Card className="">
          

       

            <ul className="list-unstyled">

               {bookings.map((booking)=>
                {
                  return(
                   <li key={booking.id}>
                   <h4 className="text-center text-white bg-warning">Booking Details </h4>
                   <CardBody className=" ml-5 text-white bg-primary  ">
                   <p>Name :<span>{booking.firstname}</span><span>{booking.lastname}</span></p>
                   <p>Phone :{booking.telnumber}</p>
                   <p>Issue Date :{booking.issue}</p>
                   <p>Return Date :{booking.ret}</p>
                   
                   </CardBody>
                   </li>
                   );

                }
                )
            }
            
            </ul>

            {car.bookingStatus==false &&
                      <div>
                       <BookForm carId={carId} addBooking={addBooking} car={car} status={status} />
                       </div>
                    } 

           
            </Card>            
        </div>
    );
    else
        return(<div></div>)
    

 }
	const Details=(props)=>
	{
		if(props.car != null)
		
			return(
			<div class="container">
                  <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.car.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.car.name}</h3>
                        <hr />
                    </div>                
                </div>

			    <div class="row">
			    <RenderCar car={props.car} />
                <RenderBookings bookings={props.bookings}
                addBooking={props.addBooking}
                carId={props.car.id}
                car={props.car}
                status={props.status}/>
                 
			    </div>
            
			</div>
			);
		else

			return(
				<div></div>
				);
		
	}
    class  BookForm extends Component 
  {
    constructor(props)
    {
    super (props);
    
        this.state = 
        {
            isNavOpen: false,
            isModalOpen: false
        };
    
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    };

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    
    handleSubmit(values) 
    {
      this.toggleModal();
      const x=document.getElementById('issue').value;
      const y=document.getElementById('return').value;
      if(x<date)
      {
        window.alert("CANNOT BOOK FOR PAST DATES");

      }
      if(y<x)
      {
        window.alert('Return date cannot fall before issue date');
      }

      else if(x>=date && y>=x){
        this.props.status(this.props.carId);
        this.props.addBooking(this.props.carId,values.firstname,values.lastname,
        values.email,
        values.telnum,x,y);

      }

      

       
    }
    render(){
      return(

      <div >
      <Button className="btn-primary text-white " outline onClick={this.toggleModal}><span>BOOK</span></Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Book</ModalHeader>
                    <ModalBody>

                     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                 
                 <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                             <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="+919898989898"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(12), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 12 charcters',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                             <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Label htmlFor="issue" md={2}>Issue Date</Label>
                                <Col md={10}>
                                    <input type="date"  id="issue" name="issue"
                                     className="form-control"
                                     
                                        />
                                       <span id="msg1" className="text-danger"></span> 
                                    
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Label htmlFor="return" md={2}>Return Date</Label>
                                <Col md={10}>
                                    <input type="date" id="return" required name="return"
                                    className="form-control"/>
                                    <span id="msg2" className="text-danger"></span> 
                                    
                                </Col>
                            </Row> 
                           
                      
                             
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    BOOK
                                    </Button>
                                </Col>    
                                </Row>      
               </LocalForm>
          </ModalBody>
      </Modal>
     </div>
      )
    }
       








  }



export default Details;