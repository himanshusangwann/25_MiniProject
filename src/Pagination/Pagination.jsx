const Pagination=({currentpage,totalpage=15,onpagechange})=>{
    function generatepage(){
        const pages =[]
        for(let i=1;i<=totalpage;i++){
            pages.push(i)
        }
        
        return pages;
    }
    return(
        <div>Hello from pagination
            <button>Next</button>
            {
                generatepage().map((item)=>
                
                   ( <button>{item}</button>)
                )
            }
            <button>Prev</button>

        </div>


    )
}

export default Pagination