
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialItems = ["React","TypeScript","HTML","CSS","JavaScript","Tailwind"];
const ids = ["0","1","2","3","4","5"]

export default function ReorderLanguages() {
  const [items, setItems] = useState(initialItems);
  return (
    <div>
      <div>
        Para desarrollar esta web con React y Tailwind he utilizado TypeScript, HTML, CSS y JavaScript. <br/> He de decir que es mi primera página web completa y sé que hay muchas cosas que perfeccionar para el futuro.
      </div>
      <Reorder.Group axis="x" onReorder={setItems} values={items} className="flex">
        {items.map((item,icon) => (
          <Item key={item} item={item} icon={icon}/>
        ))}
      </Reorder.Group>
    </div>
  );
}