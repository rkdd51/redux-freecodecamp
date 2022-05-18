import { createStore } from "redux";

const reducerfn=(state={counter:0}, action)=>{

  //Synchronous function
  //Orignal state cannot be changed

  if(action.type === "INC"){
      return { counter: state.counter + 1}
  }

  if(action.type === "DEC"){
      return { counter: state.counter - 1}
  }

  if(action.type === "ADD10"){
      return { counter: state.counter + action.payload}
  }
  return state;
  

}

const store = createStore(reducerfn);

export default store;