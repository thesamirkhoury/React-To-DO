import React from 'react';

function Form({todos,setTodos,inputText,setInputText,setStatus}){

  function inputTextHandler(e){
    setInputText(e.target.value);
  }

  function submitTodoHandler(e){
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false,id:Math.random()*1000}
    ])
    setInputText("");
  }

  function statusHandler(e){
    setStatus(e.target.value);
  }

    return(
        <form>
      <input value={inputText} type="text" className="todo-input" onInput={inputTextHandler}/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;