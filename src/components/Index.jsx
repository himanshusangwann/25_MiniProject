import data from "./data";

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

export default Index
