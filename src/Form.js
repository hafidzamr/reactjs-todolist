import React, {useState} from 'react';

const FormTodo = ({newList}) => {
  const initialState = {
    content: '',
  };
  const [List, setList] = useState(initialState);
  const handleChange = e => {
    setList({content: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    newList(List);
    setList({content: ''});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add New Todo</label>
        <input type="text" onChange={handleChange} value={List.content} />
      </form>
    </div>
  );
};

export default FormTodo;
