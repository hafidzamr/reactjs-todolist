import React from 'react';

const TodoApp = ({todo, deleteList}) => {
  const todoList = todo.length ? (
    todo.map((item, i) => (
      <ul key={i}>
        <li
          onClick={() => {
            deleteList(item.id);
          }}>
          {item.content}
        </li>
      </ul>
    ))
  ) : (
    <p>You have no todo's left</p>
  );

  return <div>{todoList} </div>;
};

export default TodoApp;
