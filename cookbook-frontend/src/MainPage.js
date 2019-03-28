import React, { Component } from 'react';
import {connect} from 'react-redux'
import YourRecipes from './YourRecipes'
import AddRecipe from './AddRecipe'

import {setRecipes} from './Redux/actions'


import './App.css';

class MainPage extends Component {
  state={
    recipes:[]
  }

  filterRecipes=(id)=>{
    let altRecipes=this.props.store.recipes.map((recipe)=>{
      return recipe
    })
    let filteredRecipes = altRecipes.filter((recipe)=> recipe.id != id )
    this.props.dispatch(setRecipes(filteredRecipes))
  }

  addToRecipes=(recipe)=>{
    let altRecipes=this.props.store.recipes.map((e)=>{
      return e
    })
    altRecipes.push(recipe)
    this.props.dispatch(setRecipes(altRecipes))
  }

  componentDidMount(){
    fetch('http://localhost:3000/recipes')
      .then(res=>res.json())
      .then(json=>{
          this.props.dispatch(setRecipes(json))
        }
      )
  }

  render() {
    // console.log(this.props.store.recipes)
    return (
      <div className="App">
        <h1 className="title">
          Title Goes Here
        </h1>
        <div>
          <YourRecipes recipes={this.state.recipes} filterRecipes={this.filterRecipes}/>
        </div>
        <div>
          <AddRecipe addToRecipes={this.addToRecipes}/>
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

export default connect(mapStateToProps)(MainPage);
