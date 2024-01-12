import { useState } from 'react';


export default function PackingList({ items, handleDeleteItem, handlePackedItems, handleClearList }) {

    const [sortBy, setSortBy] = useState('input')
  
    let sortedItems;
    if (sortBy === 'input') sortedItems = items;
  
    if (sortBy === 'description')
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  
    if (sortBy === 'packed')
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - (b.packed));
  
    return (
      <div className='list'>
        <ul>
          {sortedItems.map((item, i) => <Item item={item} key={i} handleDeleteItem={handleDeleteItem} handlePackedItems={handlePackedItems} />)}
        </ul>
        <div className='actions'>
          <select value={sortBy} onChange={(e) => setSortBy(e.currentTarget.value)}>
            <option value='input'>sort by input order</option>
            <option value='description'>sort by description</option>
            <option value='packed'>sort by packed status</option>
          </select>
          <button onClick={handleClearList}>clear list</button>
        </div>
      </div>
  
    )
  }

  function Item({ item, handleDeleteItem, handlePackedItems }) {
    return (
      <li>
        <input type='checkbox' value={item.packed} onChange={() => handlePackedItems(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
  
      </li>
    )
  }