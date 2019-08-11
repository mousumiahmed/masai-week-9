import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron } from 'reactstrap';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			gender : ""
			
		}
	}

    handleInput = (event) => this.setState({[event.target.name] : event.target.value})
    

	render(){
		return (
			<React.Fragment>
				<input type = "text" onChange = {this.handleInput} name = "gender" value = {this.state.gender}/>
				
				<button 
					onClick = {() => this.props.handleSearch(this.state.gender)} className="bg-warning"> 
					Search by Gender
				</button> 
			</React.Fragment>
		);
	}
}