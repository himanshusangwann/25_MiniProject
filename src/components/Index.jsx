/* import data from "./data";

import React, { useState } from 'react'

const Index = () => {
    const [selected,setselected] = useState(null)
    function handlesingle(did){
        setselected(did ===selected?null:did)
        
    }
  return(
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length>0 ?(    
                    data.map((item)=>(
                        <div className="item">
                            <div className="title" onClick={()=>handlesingle(item.id)}>
                            
                            <h3>{item.question}</h3>
                            <span>+</span>
                            </div>
                            {
                                selected === item.id ? <div className="content"> {item.answer}</div>: null
                            }
                        </div>
                    ))
                   

                ):(
                    <div>no data found</div>
                )
            }

        </div>
        
    </div>
  )

}

export default Index */

//practice of accordian
/* import { useState } from "react";
import data from "./data";

const Index = () => {
  const [explain, setexplain] = useState(null);
  const handle = (id) => {
    setexplain(id===explain?null:id);
    console.log(id)
    console.log(explain)
  };
  return (
    <div>
      {data.map((item) => (
        <div onClick={() => handle(item.id)}>{item.question}{explain===item.id?item.answer:null}</div>))
      
      
      }
        
    </div>
  );
};

export default Index; */


import { useState } from "react";
import data  from "./data";

const Index=()=>{
    const [answer,setanswer] =useState(null)

    const showanswer=(id)=>{
        setanswer(id===answer?null:id)

    }
return(    
 <div>
    {data.map((item)=>(
        <h1 on onClick={()=>showanswer(item.id)}>{item.question}{item.id===answer?item.answer:null}</h1>
    ))}
 </div>

)
}

export default Index