import Items from "./Items";

const TodoItems = ({ addedItem }) => {
  const items = addedItem.map((item) => {
    return <Items key={addedItem.id} {...item} />;
  });
  return (
    <div className="todoitem">
      <h1>Todo List</h1>
      <div className="list">{items}</div>
    </div>
  );
};

export default TodoItems;
