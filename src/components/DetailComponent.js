import React, { Component} from 'react';
import {Card,CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
class Details extends Component {
 renderDish(dish){
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
	render()
	{
		if(this.props.dish != null)
		
			return(
			<div class="container">
			    <div class="row">
			    {this.renderDish(this.props.dish)}
			
			    </div>

			</div>
			);
		else

			return(
				<div></div>
				);
		
	}

}
export default Details;