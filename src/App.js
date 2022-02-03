import React,{useState} from 'react'
import "./App.css"
import TodoForm from './components/todoform'
import TodoList from './components/todolist';
function App(){
  const[todo,setTodo] = useState("");
  const[todos,setTodos] = useState([]);
  const[editID,setEditId]=useState(0);
    
  const handleSubmit=(e)=>{
      e.preventDefault();  
      if(editID){
          const editTodo = todos.find((i)=> i.id=== editID);
          const updatedTodos = todos.map((t)=>
          t.id=== editTodo.id
          ? {id:t.id,todo}
          : {id :t.id, todo:t.todo}
          );
          setTodos(updatedTodos);
          setEditId(0);
          setTodo("");
          return;
        }
      
      if(todo!==''){
        setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
        setTodo('')
      }
  }
  const handledelete=(id)=>{
      const delTodo=todos.filter((to)=>to.id!==id)
      setTodos([...delTodo]);
  }
  const handleEdit=(id)=>{
    const editTodo = todos.find((to)=>to.id===id);
    setTodo(editTodo.todo);
    setEditId(id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editID={editID}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handledelete={handledelete}
        />
      </div>
    </div>
  );
}
export default App;