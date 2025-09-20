import { useState} from "react";


function Addition(){
     const [data,setdata] = useState(0);
     function add(){
        setdata(data+1);
     }
     
     function Subs(){
        setdata(data-1);
     }
        return (
            <div className="Container">
              <h1> Count:{data} </h1>
                 <button onClick={add}>AddFunction </button>
                 <button onClick={Subs}>Subs</button>
            </div>
        )
        
     }


export default Addition ;