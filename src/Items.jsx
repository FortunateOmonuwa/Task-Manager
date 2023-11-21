import { useState } from "react";

const Items = ({ todoItem, completed }) => {
  const [checked, setCheck] = useState(completed);

  function handleCheck() {
    setCheck((prev) => !prev);
  }
  return (
    <div className={checked ? "checked" : "items"}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={checked}
        onClick={handleCheck}
      />
      <label htmlFor="checkbox">{todoItem}</label>
      <button type="danger">Delete</button>
    </div>
  );
};

export default Items;
