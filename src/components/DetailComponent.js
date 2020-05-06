import React from 'react';
import {Card,CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

 function RenderDish({dish}){
 	return(
          <div className="col-12 col-md-5 m-1">
  
        <Card>



                              <CardImg  width="200%" src={dish.image} alt={dish.name}  />
                              <CardBody body className=" ml-5 ">
                              <CardTitle > {dish.name} </CardTitle>
                              <CardText> {dish.description} </CardText>
                              
                              </CardBody>
        </Card>

          </div>

 		);
 }
	const Details=(props)=>
	{
		if(props.dish != null)
		
			return(
			<div class="container">
			    <div class="row">
			    <RenderDish dish={props.dish} />
			
			    </div>

			</div>
			);
		else

			return(
				<div></div>
				);
		
	}


export default Details;