import { useState } from 'react';
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackingList from './Components/PackingList'
import Stats from './Components/Stats'
import './index.css';


export default function App() {
  const [items, setItems] = useState([])

  function handleItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItems(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    let confirmed = window.confirm('Are you sure you want to clear the list.')
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handlePackedItems={handlePackedItems}
        handleClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}
// win + period to toggle emoji section