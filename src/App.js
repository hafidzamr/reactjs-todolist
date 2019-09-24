import React, {useState} from 'react';
import TodoApp from './Todo';
import FormTodo from './Form';
const App = () => {
  const initialState = [
    {
      id: 1,
      content: 'test1',
    },
    {
      id: 2,
      content: 'test2',
    },
  ];
  const [Todo, setTodo] = useState(initialState);

  const deleteList = id => {
    const delTodo = Todo.filter((todos, i) => todos.id !== id);
    setTodo(delTodo);
  };

  const addList = newList => {
    newList.id = Math.floor(Math.random());
    setTodo([...Todo, newList]);
  };
  return (
    <div>
      <h1>Todo List App</h1>
      <FormTodo newList={addList} />
      <TodoApp todo={Todo} deleteList={deleteList} />
    </div>
  );
};

export default App;
