import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";
import DragAndDrop from "../components/DragAndDrop";

function Homes() {
  const [light, setLight] = useState(true);
  const [itemsLeft, setItemsLeft] = useState(0);
  //Contacto por defecto

  const defaultContact = [];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  const onAddContact = (contacto) => {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  };

  const remove = (contacto) => {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  };

  const removeComplete = () => {
    let newItems = nuevoContacto.filter((item) => item.completed === false);
    setNuevoContacto(newItems);
  };

  const complete = (contacto) => {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact[index].completed = !tempContact[index].completed;
    setNuevoContacto(tempContact);
  };

  const count = () => {
    let items = nuevoContacto.filter((item) => item.completed === false);
    setItemsLeft(items.length);
  };

  useEffect(() => {
    count();
  });

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let _nuevoContacto = [...nuevoContacto];

    const draggedItemContent = _nuevoContacto.splice(dragItem.current, 1)[0];

    _nuevoContacto.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setNuevoContacto(_nuevoContacto);
  };

  return (
    <div className={`home-color ${light ? "dark" : "light"}`}>
      <div className={`home-body ${light ? "dark" : "light"}`}>
        <div className="app-container">
          <Title light={light} setLight={setLight}></Title>
          <Input light={light} onAddContact={onAddContact}></Input>
          <div className={`sombra ${light ? "dark" : "light"}`}>
            {nuevoContacto.map((contacto, index) => {
              return (
                <div
                  draggable
                  onDragStart={(e) => (dragItem.current = index)}
                  onDragEnter={(e) => (dragOverItem.current = index)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <List
                    key={index}
                    light={light}
                    complete={complete}
                    remove={remove}
                    contacto={contacto}
                  ></List>
                </div>
              );
            })}
            <Footer
              setNuevoContacto={setNuevoContacto}
              nuevoContacto={nuevoContacto}
              removeComplete={removeComplete}
              itemsLeft={itemsLeft}
              setItemsLeft={setItemsLeft}
              light={light}
            ></Footer>
          </div>
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
}

export default Homes;
