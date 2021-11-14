import React,{useContext} from 'react'
import {DELETE_EVENT,ADD_OPERATION_LOG} from '../actions/index.js';
import AppContext from '../contexts/AppContext.js';
import { timeCurrentIso8601 } from '../utils.js';
const Event=({event})=> {
    const {dispatch} = useContext(AppContext);
      const id =event.id;
      const handleClickDeletBtn=()=>{
        const result=window.confirm(id+"を削除しても良いですか");
        if(result){
          dispatch({type:DELETE_EVENT,id:id});
          dispatch({
            type:ADD_OPERATION_LOG,
            description:"イベント("+id+")を削除しました",
            operationAt:timeCurrentIso8601()
          }) 
        }
      }
      return(<tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeletBtn}>削除</button></td>
      </tr>);
    
}
export default Event;