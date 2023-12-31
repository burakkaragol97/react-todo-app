import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    if (!inputText) return;
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
