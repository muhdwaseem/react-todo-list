import {useState} from 'react'
import Counter from './Counter'
function App() {
  const [count ,setcount] = useState(0)


 const addCount =()=>{
    setcount( count + 1)
   
  }
  let obj ={title:"1st counter",
  count,
  place:"man"

  }
return(
 <div>
   <button onClick = {addCount} > ADD</button>
   <Counter {...obj} />
   <Counter title="2nd counter" count={count} />
 </div>
  )
}

export default App;
