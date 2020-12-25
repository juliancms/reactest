import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
	constructor(props) {
        super(props);

        this.state = {
    	};
    }

    renderDish(dish) {
        return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }

    renderComments(dish) {
    	const comments = dish.map((comment) => {
            return (
              <div>
              	<p>{comment.comment}</p>
              	<p>--{comment.author}, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </div>
            );
        });
        return (
        	<div>
	        	<h4>Comments</h4>
	        	<div>{comments}</div>
        	</div>
        );
    }

    render() {
    	const dish = this.props.dish;
    	if (dish != null)
        return (
            <div class="container">
	            <div className="row">
	            	<div className="col-12 col-md-5 m-1">
	                  {this.renderDish(dish)}
	                 </div>
	                 <div className="col-12 col-md-5 m-1">
	                  {this.renderComments(dish.comments)}
	                 </div>
	            </div>
            </div>
        );
	    else
            return(
                <div></div>
            );
    }
}

export default Dishdetail;