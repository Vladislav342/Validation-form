import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(props){
		super(props);
		let name=props.name;
		let nameIsValid=this.validateName(name);
		let age=props.age;
		let ageIsValid=this.validateAge(age);
		this.state={name:name, age:age, nameValid:nameIsValid, ageValid:ageIsValid};
		this.onNameChange=this.onNameChange.bind(this);
		this.onAgeChange=this.onAgeChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	validateAge(age){
		return age>=0;
	}

	validateName(name){
		return name.length>2;
	}

	onAgeChange(e){
		let val=e.target.value;
		let valid=this.validateAge(val);
		this.setState({age:val, ageValid:valid});
	}

	onNameChange(e){
		let val=e.target.value;
		let valid=this.validateName(val);
		this.setState({name:val, nameValid:valid});
	}


	handleSubmit(e){
		e.preventDefault();
		if(this.state.nameValid===true && this.state.ageValid===true){
			console.log('Name:'+this.state.name+' Age:'+this.state.age);
		}
	}

	render(){
		let nameColor=this.state.nameValid===true?'green':'red';
		let ageColor=this.state.ageValid==true?'green':'red';
		return (
    		<form onSubmit={this.handleSubmit}>
    			<p>
    				<label>Name</label><br />
    				<input type='text' 
    					   value={this.state.name} 
    					   onChange={this.onNameChange}
    					   style={{borderColor:nameColor}}
    				/>
    			</p>
    			<p>
    				<label>Age</label><br />
    				<input 
    					type='text' 
    					value={this.state.age} 
    					onChange={this.onAgeChange}
    					style={{borderColor:ageColor}}
    				/>
    			</p>
    			<input type='submit' value='Send' />
    		</form>
  		);
	}
  
}

export default App;
