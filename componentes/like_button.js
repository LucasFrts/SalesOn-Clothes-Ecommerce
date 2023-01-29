'use strict';

import React,  { useState } from "react"



export default function LikeButton(props){
    const [count, setCount] = useState(0)

     function handleClick(){
         setCount(count + 1)
     }

    return(
        <div>
            <button onClick={handleClick}>Clique oi pls { props.token} { count }</button>
        </div>
    )
}
