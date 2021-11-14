import React,{useState} from 'react'

const App=()=> {
  const [count,setCount] = useState(0)
  
	const increment =()=>{
		setCount(count+1)
	}
	const decrement =()=>{
		setCount(prevCount=>prevCount-1)
	}
	const reset=()=>{
		setCount(0);
	}
	const double=()=>{
		setCount(prevCount=>prevCount*2);
	}
	const divide=()=>{
		if(count%3===0){
			setCount(count/3);
		}
	}
  return (
   	<>
    	 <div>
	  count:{count}
    	 </div>
  	 <button onClick={increment}>+1</button>
	 <button onClick={decrement}>-1</button>
	<button onClick={reset}>Reset</button>
	<button onClick={double}>*2</button>
        <button onClick={divide}>/3</button>	
	</>
  )
}

export default App
