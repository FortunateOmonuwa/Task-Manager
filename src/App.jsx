import { useState } from "react";
import Form from "./Form";
import "./style.css";
import TodoItems from "./List";
// import Page from './page'
//import Main from './assets/Projects/ReactFacts/Main'

function App() {
  const [addedItem, setAddedItem] = useState([]);
  const addItem = (item) => {
    setAddedItem((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    console.log(id);
    setAddedItem((items) => items.filter((item) => item.id !== id));
  };
  return (
    <>
      {/* <Page/> */}
      {/* <Main/> */}
      <Form addItem={addItem} />
      <TodoItems addedItem={addedItem} removeItem={removeItem} />
    </>
  );
}

export default App;
