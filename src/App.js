import { useState } from 'react';
import './index.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Shoes", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState([])

  function handledItems(item){
    setItems((items)=> [...items, item])
}

  return (
    <div className="app">
      <Logo />
      <Form handleItems={handledItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <h1>🌴 TRIP ESSENTIALS 🏖️</h1>
  );
}

function Form({handleItems}) {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  

  function handleSubmit(e) {
    e.preventDefault();
    if(!description)return;  // this is used for blank submit prevention because after return no code executes in func.

    const newObj = {
      description, quantity, packed: false, id: Date.now()
    }
    console.log(newObj);

    handleItems(newObj)

    setDescription('')
    setQuantity(1)


  }

  return (
    <form className='add-form' onClick={handleSubmit}>
      <h3>Add your ESSENTIALS : </h3>

      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 }, (x, i) => i + 1).map((num) =>
          <option
            value={num} key={num}>{num}
          </option>)
        }
      </select>
      <input type='text' placeholder='Item...' value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button> 
    </form>
  );
}

function PackingList({items}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item, i) => <Item item={item} key={i} />)}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return <footer className='stats'>
    <em>you have X items in your list, and you already packed X(X%) </em>🧳.
  </footer>
}

// win + period to toggle emoji section