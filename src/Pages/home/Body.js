import React, {  useEffect, useState } from 'react'
import "./Body.css"
import bit1 from "../../Assests/bitmap-1.png"
import bit2 from "../../Assests/bitmap-2.png"
import bit3 from "../../Assests/bitmap-3.png"
import { Grid } from '@mui/material'


const Body = () => {

const [offset,setOffset] = useState(0)

const Handlescroll = ()=>{
  setOffset(window.pageYOffset)
 
}


useEffect(()=>{
  
  window.addEventListener("scroll",Handlescroll)

return ()=>window.removeEventListener("scroll",Handlescroll)
},[]);

  return (
    <>
        <Grid container className='imagecontainer'>

<div className='bit-img1' style={{transform:`translateY(-${offset*0.1}px)`}}>
<img className='bit-img11' src={bit1} alt="" srcset=""  />
</div>
{/* </Grid> */}


 <div className='bit-img2' style={{transform:`translateY(-${offset*0.1}px)`}}>
<img className='bit-img22' src={bit2} alt="" srcset=""  />
</div>   




 <div className='bit-img3' style={{transform:`translateY(-${offset*0.2}px)`}}>
<img className='bit-img33' src={bit3} alt="" srcset="" />
</div> 


</Grid>
    </>
  )
}

export default Body