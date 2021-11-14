import React,{useEffect,useState} from 'react'

const App=(props)=> {
	const [state,setState] = useState(props)
	const {name,price} = state;

	const reset=()=>{
		setState(props);
	}

	useEffect(()=>{
		console.log('最初だけ');
	},[])

	useEffect(()=>{
		console.log('name変更時だけ');
	},[name])
  return (
  <>
		<p>現在の{name}は{price}円です</p>
		<button onClick={()=>setState({...state,price:price+1})}>+1</button>
		<button onClick={()=>setState({...state,price:price-1})}>-1</button>
		<input value={name} onChange={e=>setState({...state,name:e.target.value})} />
		<button onClick={reset}>Reset</button>
	</>
  )
}

App.defaultProps={
	name:'',
	price:1000
}
export default App
