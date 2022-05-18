import { useSelector , useDispatch } from "react-redux";
import './App.css';


function App() {
  const counter =useSelector((state)=> state.counter)
  const dispatch =useDispatch()
  const increment =()=>{
    dispatch({type:"INC"})
  }
   const decrement  =()=>{
     dispatch({type:"DEC"})
  }
  const addBy =()=>{
    dispatch({type:"ADD10",payload:10})
  }
  return (
    <div className="App">
     <h2>This is a redux counter</h2>
     {counter}
     <br/>
     <button onClick={increment}>increment</button>
      <br/>
     <button onClick={decrement}>decrement</button>
      <br/>
     <button onClick={addBy}> Add by 10</button>
    </div>
  );
}

export default App;
