import React from "react";
import Display from "./Display.js";
import Search from "./Search.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container } from 'reactstrap';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			gender : null
		}
	}

	handleSearch = (gender) => this.setState({
		gender: gender
	});
	render(){
		return(
			<React.Fragment>
                <Jumbotron className="bg-info text-center">
                  <h2>STUDENT DATABASE</h2>  
                  <hr></hr>
                  <Container>
                  <Search handleSearch = {this.handleSearch} className="mt-5"/>

                  </Container>
                  <Container>
                  {this.state.gender !== null ? (<Display gender = {this.state.gender}/>) : null} 

                  </Container>
                </Jumbotron>

				
				  
			</React.Fragment>
		);
	}
}