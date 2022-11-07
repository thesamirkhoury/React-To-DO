import React,{useState,useEffect} from 'react';
import './App.css';
//Import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {


  // Javascript code
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);



  //Use Effect
  useEffect(()=>{
    filterHandler();
    saveLocal();
  }, [todos,status]);

  useEffect(()=>{
    getLocal();
  },[]);

  function filterHandler(){
    if(status==="completed"){
      setFilteredTodos(todos.filter((todo)=>todo.completed===true));
    }
    else if(status==="uncompleted"){
      setFilteredTodos(todos.filter((todo)=>
        todo.completed===false
      ));
    }
    else{
      setFilteredTodos(todos);
    }
  }

  function getLocal(){
      console.log("here");
      let todoLocal= JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);

  }

  //local storage.
  function saveLocal(){
      localStorage.setItem("todos", JSON.stringify(todos));
  }




  return (
    <div className="App">

      <header>
        <h1>Todo App</h1>
      </header>

      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>

      <TodoList filteredTodos={filteredTodos}  todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
