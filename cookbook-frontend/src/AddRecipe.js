import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

class AddRecipe extends Component {
  state={
    name:'',
    description:''
  }

  createRecipe=(event)=>{
    event.preventDefault()
    let newRecipe = {
      name:this.state.name,
      description:this.state.description
    }
    this.props.addToRecipes(newRecipe)
    let options={
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newRecipe)
    }
    fetch('http://localhost:3000/recipes',options)
    .then(res=>res.json())
    .then(json=>console.log("Successfully Added"))
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name:"",
      description:""
    })
    // this.props.history.push('/')
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div className="AddRecipeContainer ui container">
        <h4>
          Add Recipe
        </h4>
        <form onSubmit={this.createRecipe}>
          Name:<br/>
          <input name="name" type="text" autoComplete="off" onChange={this.handleChange}/><br/>
          Description:<br/>
          <textarea name="description" type="text"  autoComplete="off" onChange={this.handleChange}/><br/>
          <button className="ui button" type="submit">
          Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(AddRecipe);
