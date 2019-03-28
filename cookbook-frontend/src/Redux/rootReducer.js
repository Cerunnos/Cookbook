const defaultState={
  recipes:[]
}

const rootReducer=(state=defaultState,action)=>{
  switch(action.type){
    case 'SET_RECIPES':
      return {...state,recipes:action.recipes}
    default:
      return state
  }
}

export default rootReducer
