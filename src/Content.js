import React from 'react'
import ItemsList from './ItemsList';


const Content = ({item,changeCheckbox,deleteitem}) =>
{
    // const [name,setName] = useState("ajith");
    // function changeName()
    // {
        
    //     const names=["hari","krishnan","harikrishnan"];
    //     const int = Math.floor(Math.random()*3);
    //     setName(names[int])
      
    // }

    // const [count,setCount]=useState(0);

    // function inrement()
    // {
    //     setCount(count+1)
    // }
    // function decrement() {
    //     setCount(count-1)
    // }

    // ToDoList
    

    // const number=[0,1,2,2,6,-8,-9,-10]
    // const itemss=number.filter(n=>n>=-9)
    // console.log(itemss);
    return(
        <main>
            
            {/* <div>This is content </div>
            <h4>My name is {name}</h4>
            <button onClick={changeName}>Click me</button>
            <h3>Inrement and Decrement operation</h3>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={inrement}>+</button>  */}

            {item.length ?(
                <ItemsList 
                item={item}
                key={item.id}
                changeCheckbox={changeCheckbox}
                deleteitem={deleteitem}
                />
            ): (<h3>Your list is empty</h3>)

            }
        </main>
    );
}

export default Content