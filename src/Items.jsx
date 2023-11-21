const Items = ({ todoItem, completed }) => {
  return (
    <div className="items">
      <input type="checkbox" name="" id="" />
      <label htmlFor="checkbox">{todoItem}</label>
      <button type="danger">Delete</button>
    </div>
  );
};

export default Items;
