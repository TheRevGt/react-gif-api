import { useState } from "react"
import {PropTypes} from "prop-types"
export const AddCategoty = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim()
        if (value.length <= 1) return
        // setCategories(category => [inputValue, ...category])
        onNewCategory(value)
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-label="form">
        <input
        className=" rounded-lg border-2 p-2 border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
        type="text" 
        name= {inputValue}
        onChange={onInputChange}
        value= {inputValue}
        id=""
        placeholder="Buscar GIF" />
        <button className=" rounded-lg border-2 bg-blue-600 hover:bg-blue-800 m-1 p-2 border-gray-600 text-white" onClick={onSubmit}>Ad Category</button>
    </form>
  )
}
AddCategoty.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
