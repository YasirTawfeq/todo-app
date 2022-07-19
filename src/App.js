import {useState} from 'react';
import './App.css';


function App() {
  const[task,setTask]=useState([{id:234,text:'Add your Todo list'}])
  const [input,setInput]=useState('');
  const [edited,setEdit]=useState('');

  const handleChange=(event)=>{
    setInput(event.target.value)
  }
  const list={
      id:Math.floor(Math.random() * 10000),
      text: triger?edited:input
    }
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTask(oldList=>[...oldList,list])
    setInput('');
  }

  function delet(id){
    const newItem=task.filter(item=>item.id!==id);
    setTask(newItem);
  }

  var triger;
  function edit(id){
     triger=true;
     task.find(item=>item.id===id?setEdit(item.text= prompt('Edit')):'')
     triger=false;
    
  }

  return (
    <div className="App">
      <div className="todo" >
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task.." value={input} onChange={handleChange}/>
        <button disabled={!input} type="submit">Add</button>
      </form>
      <ul>
        {task?.map(task =>
        <li key={task.id}>
          {task.text}
         <div> 
            <button onClick={()=>edit(task.id)}>Edit</button>
            <button onClick={()=>delet(task.id)}>Delete</button>
         </div>
        </li>)}
      </ul>
      </div>
      
    </div>
  );
}

export default App;
