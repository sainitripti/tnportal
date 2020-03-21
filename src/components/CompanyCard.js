import React, { Component } from 'react'

class CompanyCard extends Component {
    render() {
        return (
                
                <div className="card">
		                <div className="card-header card-header-info">
		                	<h4 style={{margin:0}}>
                                {this.props.company.name}
		                	</h4>
		                </div>
                		<div className="card-body">
		                	<h4 className="card-title">
		                  		Visit Date: 20 Jan 2020
		                  	</h4>
		                	<p className="card-category">
								<a className="text-info" data-toggle="collapse" href="#moreDetails" role="button" aria-expanded="false" aria-controls="moreDetails">
							    	More details
							  	</a>
		  					</p>
							<div className="collapse" id="moreDetails">
						  		<div className="card card-body">
						    		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
						  		</div>
							</div>
                  			<button type="button" className="btn btn-outline-success">Register</button>
                		</div>
                		<div className="card-footer">
                  			<div className="stats">
                    			<i className="material-icons">
                    				access_time
                    			</i> 
                    			Last date to register: 5 Feb 2020
                  			</div>
                		</div>
              		</div>
        )
    }
}

export default CompanyCard;
