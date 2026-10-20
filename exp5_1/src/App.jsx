import React, {useState} from 'react';

function ItemList({items}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key = {index}>{item}</li>
      ))}
    </ul>
  );
}

function App(){
  const [items, setItems] = useState(["red", "black", "purple"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== ""){
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <div>
      <h1>Dynamic List</h1>
      <ItemList items = {items}/>

      <input type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} />

      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default App;