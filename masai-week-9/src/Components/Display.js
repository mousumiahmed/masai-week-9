import React from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col } from 'reactstrap';



export default class Display extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			result:[]        
		}
	}

	componentDidMount(){
		axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json',
    		
        })
        
		.then((response) =>{
           this.setState({
				result:response.data
               
            });	
            //console.log(response);
                    
        })
        
		.catch((err) => alert(err))
	}

	componentDidUpdate(prevProps){
		if(this.props.gender !== prevProps.gender){
			console.log(this.props.gender)
			axios({
				method: 'get',
	    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json',
	    		params : {
	        		gender : this.props.gender
	        		
	    		}
			})
			.then((response) =>{
				
					this.setState({
						result: response.data
					});	
				
			})
			.catch((err) => alert(err))
		}
	}
	
	render(){
		console.log(this.props.gender)	
		console.log(this.state.result)	
	
		return(
			<React.Fragment>
				
				
						 						 
					 {this.state.result.map((value,index)=>{
						 if(this.props.gender === value.gender){
							 return (<Col className="bg-secondary  m-5"key={index}>   <h4>Name : {value.first_name}</h4> ID :{value.id} Marks :{value.marks} Year:{value.year} Gender :{value.gender}</Col>
							 		)
							}})
						 }
					
				</React.Fragment>
			
		);
	}
}