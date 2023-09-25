import './App.css';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "./redux/CounterSlice";
 
function App() {
  const [counter , setCounter] = useState(0);
  const counterStore = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App container-md pt-5">
      <div className = "pb-3">
      <h2>simple state management with Redux Toolkit.. 🔥 </h2>
      </div>
      <div className = "row">
        <div className = "col-md-5">
          <Button variant="primary" onClick = {() => dispatch(incrementAction()) }>
            Increment
          </Button>
        </div>
        <div className = "col-md-2">
          <h4>
            {counterStore.counter}
          </h4>
        </div>
        <div className = "col-md-5">
          <Button variant="primary" onClick = {() => dispatch(decrementAction())}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;