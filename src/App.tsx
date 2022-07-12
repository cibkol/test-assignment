import { observer } from "mobx-react-lite";
import React from "react";
import TextField from "./components/TextField";
import "./assets/sass/global.sass";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField
        onChange={function (value: string, key: string): void {
          throw new Error("Function not implemented.");
        }}
        value={""}
        name={""}
      />
    </div>
  );
};

export default observer(App);
