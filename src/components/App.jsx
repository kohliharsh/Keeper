import React, { useState } from "react";
import Todoitems from "./todoitems";
import Input from "./input";
import Heading from "./heading";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id)
  {
    setItems(prevItems => {
      return prevItems.filter((element,index) =>{
        return index !== id;
      })
    })
  }
  
  return (
    <div className="container">
      <Heading />
      <Input onChange = {handleChange} value = {inputText} click = {addItem}/>
      <div>
        <ul>
          {items.map((todoItems,index) => (
            <Todoitems key = {index} id = {index} text = {todoItems} onChecked = {deleteItem}/>
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default App;
