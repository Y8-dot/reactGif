import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGird } from "./components/GifGird";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //  categories.push('Valorant');
    setCategories([newCategory, ...categories]); //Desestructura el state y le agrega el nuevo dato
    //setCategories(cat =>[...cat, 'Valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGird key={category} category={category} />
      ))}
    </>
  );
};
