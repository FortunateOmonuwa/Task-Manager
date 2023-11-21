import { useState } from "react";

const Form = ({ addItem }) => {
  const [item, setItem] = useState({
    id: Date.now(),
    todoItem: "",
    completed: false,
  });

  const handleInput = (e) => {
    setItem((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.todoItem !== "") {
      const { id, todoItem, completed } = item;
      const newItem = {
        id,
        todoItem,
        completed,
      };
      console.log(newItem);
      addItem(newItem);
      setItem({ todoItem: "" });
    }
  };

  return (
    <form className="newItem" onSubmit={handleSubmit}>
      <label>New Item</label>
      <input
        type="text"
        value={item.todoItem}
        name="todoItem"
        onChange={handleInput}
        placeholder="enter todo item"
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
