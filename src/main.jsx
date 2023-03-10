import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NoteState from "./contexts/notes/NoteState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteState>
      <App />
    </NoteState>
  </React.StrictMode>
);
