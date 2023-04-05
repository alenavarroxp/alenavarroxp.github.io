import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import react from './logos/react.png'
import typescript from './logos/typescript.png'
import html from './logos/html.png'
import css from './logos/css.png'
import javascript from './logos/javascript.png'
import tailwind from './logos/tailwind.png'
import { useEffect } from "react";

interface Props {
  item: string;
  icon: any;
}

export const Item = ({ item,icon}: Props) => {
  const y = useMotionValue(0);
  function comprobar(item:string){
    switch(item){
      case "React": return <img src={react}/>
      case "TypeScript": return <img src={typescript}/>
      case "HTML": return <img src={html}/>
      case "CSS": return <img src={css}/>
      case "JavaScript": return <img src={javascript}/>
      case "Tailwind": return <img src={tailwind}/>

    }
    return <></>
  }
  return (
    <div>
    <Reorder.Item value={item} id={item} style={{y,margin:10, display:"flex"}} >
      <div className="mr-1 pointer-events-none">{comprobar(item)}</div>
      <p className="text-xl">{item}</p>
    </Reorder.Item>
    </div>
  );
};
