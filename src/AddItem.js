import React from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="AddItem">Add Item</label>
        <input autoFocus id='addItem' placeholder='Add Item' type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} required />
        <button type='submit' aria-label='Add Item'>Add Item</button>
    </form>
  )
}

export default AddItem