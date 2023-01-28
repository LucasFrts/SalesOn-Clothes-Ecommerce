'use strict';

import React,  { useState } from "react"



export default function LikeButton(){
    const [count, setCount] = useState(0)

     function handleClick(){
         setCount(count + 1)
     }

    return(
        <div>
            <button onClick={handleClick}>Clique aqui em 123  { count }</button>
        </div>
    )
}
