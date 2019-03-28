import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

class YourRecipes extends Component {

  deleteRecipe=(e)=>{
    e.preventDefault()
    let id=e.target.id
    this.props.filterRecipes(id)

    let options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    fetch(`http://localhost:3000/recipes/${id}`, options)
    .then(res=>res.json())
    .then(json=>console.log(json))
  }

  render() {
    console.log(this.props.recipes)
    let yourRecipeList=this.props.store.recipes.map((recipe)=>{
      return <li key={recipe.id}>{recipe.name}<button className="ui button" id={recipe.id} onClick={this.deleteRecipe}>Delete Recipe</button></li>
    })
    return (
      <div className="YourRecipesContainer ui container">
        <h4>
          Your Recipes
        </h4>
        <div>
          {yourRecipeList}
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(YourRecipes);
