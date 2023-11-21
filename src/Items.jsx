import { useState } from "react";

const Items = ({ todoItem, completed, id, removeItem }) => {
  const [checked, setCheck] = useState(completed);

  function handleCheck() {
    setCheck((prev) => !prev);
  }
  return (
    <div key={id} id={id} className={checked ? "checked" : "items"}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={checked}
        onClick={handleCheck}
      />
      <label htmlFor="checkbox">{todoItem}</label>
      <button type="danger" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default Items;
