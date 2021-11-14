import React,{useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index.js';
import AppContext from '../contexts/AppContext';
import Events from './Events'
import EventForm from './EventForm'
const App=()=> {
	const initialState={
		events:[],
		operationLogs:[]
	}
	const [state,dispatch]=useReducer(reducer,initialState)



  return (
  <AppContext.Provider value={{state,dispatch}}>
			<div className="container-fluid">
			<EventForm />
			<Events />
			
		</div>

	</AppContext.Provider>
  )
}

App.defaultProps={
	name:'',
	price:1000
}
export default App
