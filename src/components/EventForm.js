import React,{useState,useContext} from 'react'
import {CREATE_EVENT,DELETE_ALL_EVENTS,ADD_OPERATION_LOG,DELETE_ALL_OPERATION_LOG} from '../actions/index.js';
import AppContext from '../contexts/AppContext.js';
import { timeCurrentIso8601 } from '../utils.js';
const EventForm=()=>{
  const [title,setTitle]=useState('');
	const [body,setBody]=useState('');
  const {state,dispatch} = useContext(AppContext)
	const addEvent=(e)=>{
		e.preventDefault();
		dispatch({
			type:CREATE_EVENT,
			title,body
		})
    dispatch({
			type:ADD_OPERATION_LOG,
			description:"イベントを作成しました",
      operationAt:timeCurrentIso8601()
		})
		setTitle('');
		setBody('');
	}
	const deleteAllEvents=(e)=>{
		e.preventDefault();
		const result=window.confirm("全て削除して良いですか");
		if(result){
      dispatch({type:DELETE_ALL_EVENTS});
      dispatch({
        type:ADD_OPERATION_LOG,
        description:"全てのイベントを削除しました",
        operationAt:timeCurrentIso8601()
      }) 
    }
	}

	const unCreateble=title===''||body==='';

  const deleteAllOperationLogs=e=>{
    e.preventDefault();
    const result=window.confirm("本当に削除しますか");
    if(result){
      dispatch({
        type:DELETE_ALL_OPERATION_LOG
      });
    }
  }
  return(<>
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

  <button className="btn btn-primary" onClick={addEvent} disabled={unCreateble}>作成</button>
  <button className="btn btn-danger">削除</button>
  <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length===0}>全て削除</button>
  <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length===0}>全てのログを削除</button>
</form>
  </>);
}

export default EventForm;
