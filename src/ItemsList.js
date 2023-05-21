import React from 'react'

const ItemsList = ({item,changeCheckbox,deleteitem}) => {
  console.log(item);
  return (
    <ul>
                {item.map((itemed)=>
                
                <li className='item' key={item.id}>
                    <input type="checkbox" checked={itemed.checked} onChange={() => changeCheckbox(itemed.id)} />
                    <label style={(itemed.checked)? {textDecoration:'line-throgh'}: null} onDoubleClick={() => changeCheckbox(itemed.id)} >{itemed.item}</label>
                    <button onClick={() => deleteitem(itemed.id)}>Delete Item</button>   
                </li>
                )}
            </ul>
  )
}

export default ItemsList