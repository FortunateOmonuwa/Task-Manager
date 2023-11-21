import { useState } from "react";
import Form from "./Form";
import "./style.css";
import TodoItems from "./List";
// import Page from './page'
//import Main from './assets/Projects/ReactFacts/Main'

function App() {
  return (
    <>
      {/* <Page/> */}
      {/* <Main/> */}
      <Form />
      <TodoItems />
    </>
  );
}

export default App;
