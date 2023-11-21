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
  return (
    <>
      {/* <Page/> */}
      {/* <Main/> */}
      <Form addItem={addItem} />
      <TodoItems addedItem={addedItem} />
    </>
  );
}

export default App;
