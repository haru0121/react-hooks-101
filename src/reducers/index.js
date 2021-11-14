const events=(state=[],action)=>{
  switch(action.type){
    case "CREATE_EVENT":
      const event={title:action.title,body:action.body}
      const length = state.length;
      let id;
      if(length===0){
        id=1;
      }else{
        id=state[length-1].id+1
      }
      return [...state,{id:id,...event}]
    case "DELETE_EVENT":
      return state.filter(event=>event.id!==action.id);
    return state
    case "DELETE_ALL_EVENTS":
      return []
    default:
      return state
  }
}

export default events;