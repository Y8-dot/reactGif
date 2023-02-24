import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (event) =>{
       // console.log(event.target.value)
        setInputValue(event.target.value);

    };

    //con esta funcion se hace el agregar lo que se escribio
    const onSubmit = (event) =>{
        event.preventDefault(); //esto se hace para que no haga refresh al dar enter
        if (inputValue.trim().length <=1 ) return; //condicion para que no mande vacios
        //setCategories(categories => [...categories, inputValue]); //de esta manera estamos enviando los nuevos valores sin perder anteriores
        onNewCategory(inputValue.trim());
        setInputValue('') //esto es para que no se quede el valor en el input


    };
  return (
    <>
    <form onSubmit={onSubmit}>
        <input
        type = "text"
        placeholder="Buscar GIF's"
        value={inputValue}
        onChange = { onInputChange}
        />
    </form>
    
    </>
  )
}
