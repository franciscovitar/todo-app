import React from "react";
import { useRef } from "react";

function Input({ onAddContact, light }) {
  const tarea = useRef("");

  const addContact = (e) => {
    e.preventDefault();
    if (tarea.current.value.trim() != "") {
      const newContact = {
        tarea: tarea.current.value,
        completed: false,
      };

      onAddContact(newContact);
      tarea.current.value = "";
    } else {
      alert("WRITE SOMETHING");
    }
  };

  return (
    <div className="todo-container">
      <div className="container">
        <form
          onSubmit={addContact}
          className={`body ${light ? "dark" : "light"}`}
        >
          <div className={`circle ${light ? "dark" : "light"}`}></div>
          <input
            className={`input ${light ? "dark" : "light"}`}
            ref={tarea}
            placeholder="Create a new todo..."
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Input;
