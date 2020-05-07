import React from 'react';
import {Card,CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

 function RenderDish({dish}){
 	return(
    <div className="col-12 col-md-5 m-1">
  
        <Card>



            <CardImg  width="200%" src={dish.image} alt={dish.name}  />
                <CardBody body className=" ml-5 ">
                    <CardTitle > {dish.name} 
                    </CardTitle>
                    <CardText> {dish.description} 
                    </CardText>
                              
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
                  <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>

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