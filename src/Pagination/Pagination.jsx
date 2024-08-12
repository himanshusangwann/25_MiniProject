/* const Pagination=({currentpage,totalpage=10,onpagechange})=>{
    function generatepage(){
        const pages =[]
        for(let i=1;i<=totalpage;i++){
            pages.push(i)
        }
        console.log(pages)
        return pages;
    }
    return(
        <div>Hello from pagination
            <button>Next</button>
            {
                generatepage().map((item)=>
                
                   ( <button key={item}>{item}</button>)
                )
            }
            <button>Prev</button>

        </div>


    )
}

export default Pagination

 */

import React from 'react'
const ar= []

function createpagination(totalpages=10){
    for(let i=1;i<=totalpages;i++){
        ar.push(i)

    }
    console.log(ar)
    return ar
}

const Pagination = () => {
  return (
    <div>
      Hello from Pagination
      <button>Next</button>
      {
        createpagination().map((item)=>
        <button>{item}</button>)
      }
      <button>Prev</button>
    </div>
  )
}

export default Pagination
