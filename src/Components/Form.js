import { useState } from 'react';

export default function Form({ handleItems }) {

    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;  // this is used for blank submit prevention because after return no code executes in func.

        const newObj = {
            description, quantity, packed: false, id: Date.now()
        }

        handleItems(newObj)

        setDescription('')
        setQuantity(1)


    }

    return (
        <form className='add-form' onClick={handleSubmit}>
            <h3>Add your ESSENTIALS : </h3>

            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 10 }, (x, i) => i + 1).map((num) =>
                    <option value={num} key={num}>
                        {num}
                    </option>)
                }
            </select>
            <input type='text' placeholder='Item...' value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
}