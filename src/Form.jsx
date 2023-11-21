import { useState } from "react";

const Form = () => {
  const [item, setItem] = useState({
    id: crypto.randomUUID(),
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

    setItem({ id: "", todoItem: "", completed: "" });
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
