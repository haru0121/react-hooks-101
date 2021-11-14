import React,{useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index.js';
import AppContext from '../contexts/AppContext';
import Events from './Events'
import EventForm from './EventForm'
const App=()=> {

	const [state,dispatch]=useReducer(reducer,[])



  return (
  <AppContext.Provider value={"Hello"}>
			<div className="container-fluid">
			<EventForm state={state} dispatch={dispatch}/>
			<Events state={state} dispatch={dispatch}/>
			
		</div>

	</AppContext.Provider>
  )
}

App.defaultProps={
	name:'',
	price:1000
}
export default App
