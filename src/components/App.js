import React,{useState,useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index.js';
import Event from './Event'
const App=()=> {
	const [title,setTitle]=useState('');
	const [body,setBody]=useState('');	
	const [state,dispatch]=useReducer(reducer,[])

	const addEvent=(e)=>{
		e.preventDefault();
		dispatch({
			type:"CREATE_EVENT",
			title,body
		})
		setTitle('');
		setBody('');
	}
  return (
  <>
		<div className="container-fluid">
			<h4>イベント作成</h4>

			<form>
				<div className="form-group">
					<label htmlFor="formEventTitle">タイトル</label>
					<input id="formEventTitle" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
				</div>

				<div className="form-group">
					<label htmlFor="formEventBody">ボディー</label>
					<textarea id="formEventBody" className="form-control" value={body} onChange={e=>setBody(e.target.value)} />
				</div>

				<button className="btn btn-primary" onClick={addEvent}>作成</button>
				<button className="btn btn-danger">削除</button>
				<button className="btn btn-danger">全て削除</button>
			</form>

			<h4>イベント一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディー</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.map((event,index)=>(<Event key={index} event={event} dispatch={dispatch}/>))}
					</tbody>
			</table>
		</div>

	</>
  )
}

App.defaultProps={
	name:'',
	price:1000
}
export default App
