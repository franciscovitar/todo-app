import React, { useRef } from "react";
import Cross from "../images/icon-cross.svg";
import Check from "../images/icon-check.svg";

function List({ contacto, remove, complete, light }) {
  return (
    <div className="another-container">
      <div className={`contenedor ${light ? "dark" : "light"}`}>
        <div className="left">
          <img
            onClick={() => complete(contacto)}
            src={contacto.completed ? Check : ""}
            className={`circle ${contacto.completed ? "active" : ""} && ${
              light ? "dark" : "light"
            }`}
          ></img>
          <p
            className={`parrafo ${contacto.completed ? "active" : ""} && ${
              light ? "dark" : "light"
            }`}
          >
            {contacto.tarea}
          </p>
        </div>
        <div className="right">
          <img onClick={() => remove(contacto)} src={Cross}></img>
        </div>
      </div>
    </div>
  );
}

export default List;
