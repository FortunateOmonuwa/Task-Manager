import Items from "./Items";

const TodoItems = ({ addedItem, removeItem }) => {
  const items = addedItem.map((item) => {
    return <Items key={addedItem.id} {...item} removeItem={removeItem} />;
  });

  return (
    <div className="todoitem">
      <h1>Todo List</h1>
      <div className="list">{items}</div>

      <p>
        You have {addedItem.length > 0 ? <span>{addedItem.length}</span> : "no"}{" "}
        item(s) on your Todo-List{" "}
      </p>
    </div>
  );
};

export default TodoItems;
