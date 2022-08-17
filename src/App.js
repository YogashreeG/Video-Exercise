import React from "react";
import { Mproject } from "./BasicReactMethod/Mproject";
import { Jsx } from "./BasicReactMethod/Jsx";
import { Book } from "./BasicReactMethod/Book";
import { SimpleList } from "./BasicReactMethod/SimpleList";
import { ProperList } from "./BasicReactMethod/ProperList";

export function App() {
  return (
    <div className="App">
      <Mproject />
      <Jsx />
      <Book />
      <SimpleList />
      <ProperList />
    </div>
  );
}
export default App;
