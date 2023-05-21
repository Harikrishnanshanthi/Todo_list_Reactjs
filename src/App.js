import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import React from 'react'
import { useState } from 'react';
import AddItem from './AddItem';

function App() {

  const [item,setItem] = useState([
    {
        id:1,
        checked:true,
        item:"Learn coding"
    },
    {
        id:2,
        checked:false,
        item:"Practice Learned thins"
    },
    {
        id:3,
        checked:true,
        item:"Grow your carrier"
    }
])

const [newItem,setNewItem] = useState('')

const addItem = (itemed) =>
{
  const id= item.length ? item[item.length-1].id+1 : 1;
  const addNewItem ={id,checked:false,item:itemed}
  const listItem = [...item,addNewItem]
  setItem(listItem)
  localStorage.setItem("todo_list", JSON.stringify(listItem))
}

const changeCheckbox = (id) =>
{
    const listitem = item.map((item)=>
    item.id=== id ? {...item, checked:! item.checked}: item )
    setItem(listitem);

    localStorage.setItem("todo_list",JSON.stringify(listitem))
}

const deleteitem = (id) =>
{
    const listitem = item.filter((item)=>
    item.id!== id)
    setItem(listitem);

    localStorage.setItem("todo_list",JSON.stringify(listitem))
}

const handleSubmit = (e) =>
{
  e.preventDefault()
  if (!newItem) return;
  console.log(newItem);
  // add Item so we call a function
  addItem(newItem)
  // after add item the text box should be empty so wee do
  setNewItem('')
}

  return(
    <div className='App'>
      <Header title="harikrishnan"/>  

      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Content 
        item={item}
        changeCheckbox={changeCheckbox}
        deleteitem={deleteitem}
      />
      <Footer 
        len={item.length}
      />
    </div>
  );
}

export default App;
