import React, { useEffect, useState } from "react";

function Footer({
  itemsLeft,
  removeComplete,
  light,
  nuevoContacto,
  setNuevoContacto,
}) {
  const [selected, setSelected] = useState(1);

  const showAll = () => {
    const showAllContact = [...nuevoContacto];
    setNuevoContacto(showAllContact);
  };

  const showActive = () => {
    const showActiveContact = [...nuevoContacto];
    const activeContact = showActiveContact.filter(
      (item) => item.completed === false
    );
    setNuevoContacto(activeContact);
  };
  const showCompleted = () => {
    const showCompletedContact = [...nuevoContacto];
    const completedContact = showCompletedContact.filter(
      (item) => item.completed === true
    );
    setNuevoContacto(completedContact);
  };

  return (
    <div className="footer-container">
      <div className={`container ${light ? "dark" : "light"}`}>
        <div className="left">
          <p>{itemsLeft} items left</p>
        </div>
        <div className="medium">
          <p
            onClick={() => {
              showAll();
              setSelected(1);
            }}
            className={selected === 1 ? "selected" : ""}
          >
            All
          </p>
          <p
            className={selected === 2 ? "selected" : ""}
            onClick={() => {
              showActive();
              setSelected(2);
            }}
          >
            Active
          </p>
          <p
            className={selected === 3 ? "selected" : ""}
            onClick={() => {
              showCompleted();
              setSelected(3);
            }}
          >
            Completed
          </p>
        </div>
        <div className="right">
          <p onClick={removeComplete}>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
