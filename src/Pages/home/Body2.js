import { Grid } from '@mui/material'
import React, { useState } from 'react'
import "./Body2.css"
import bit4 from "../../Assests/bitmap-4.png"
import bit5 from "../../Assests/bitmap-5.png"

const Body2 = () => {
    const [offset,setOffset] = useState(0)

const Handlescroll = ()=>{
  setOffset(window.pageYOffset)
 
}
window.addEventListener("scroll",Handlescroll)


  return (
    <>
<Grid container>
<Grid item xs={12} sm={12} md={7}>
    <div className='contentbody2'>

<p className='contentbody2about'>About</p>

<p className='contentbody2para' >We are a digital communication agency. We write your story and bring it to life on the web.</p>
</div>

<div  style={{transform:`translateY(-${offset*0.2}px)`}}>
<img className='body2img2' src={bit5} alt="" srcset="" />
    </div>

<div className='contentbody22'>
<p className='contentbody2para2'>We believe that beyond a product or service, the strength of your brand lies in its concrete utility. To exist and reach its public it is now necessary to be part of a sincere approach that looks like you. That's why at Castor & Pollux, we write stories that aim to make you resonate in the ❤️ of your targets.</p>
<div className='body2hover'>
<p><i class="fa fa-play" aria-hidden="true"></i> discover the agency</p>
</div>
</div>


    </Grid>
<Grid item xs={12} sm={12} md={5}>
    <div  style={{transform:`translateY(-${offset*0.2}px)`}}>
<img className='body2img' src={bit4} alt="" srcset="" />
    </div>

    </Grid>
</Grid>
    </>
  )
}

export default Body2