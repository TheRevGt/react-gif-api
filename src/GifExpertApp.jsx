import { useState } from "react"
import { AddCategoty, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [category, setCategories] = useState(['One Punch Man'])
  const addCategory = (value) => {
    value = value.toLocaleUpperCase();
    if(category.includes(value))return;
    setCategories([value, ...category])
  }
  return (
    <div className=" text-center w-full justify-center">
        <h1 className="text-3xl font-bold uppercase">
        Search gifs
        </h1>
        <AddCategoty
        // setCategories={setCategories}
        onNewCategory={(value) => addCategory(value)}
        />
          {category.map(cat => (
              <GifGrid key={cat} category={cat}/>
            ))
          }
    </div>
  )
}
