import { Grid } from '@mui/material'
import React, { useState } from 'react'
import "./Body3.css"
import bit6 from '../../Assests/bitmap-6.png'
import bit7 from '../../Assests/bitmap-7.png'


const Body3 = () => {
  
        const [offset,setOffset] = useState(0)
    
    const Handlescroll = ()=>{
      setOffset(window.pageYOffset)
     
    }
    window.addEventListener("scroll",Handlescroll)
    


  return (
    <>
<Grid container>
    <Grid item xs={12} sm={12} md={6} lg={6}>
<div className='contentbody3'>
<p className='contentbody3para'>Since 2010, Castor & Pollux has supported many brands in defining their online presence strategy. Analyze its challenges, and support it to meet them. Then build and broadcast a story, on the web and elsewhere: site, activation, social strategy, brand content, motion design...</p>

<div className='body3hover'>
<p><i class="fa fa-play" aria-hidden="true"></i> discover our star skills</p>
</div>
</div>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>
<div style={{transform:`translateY(-${offset*0.2}px)`}}>
<img  className='body3img' src={bit6} alt="" srcset="" />
</div>
<div style={{transform:`translateY(-${offset*0.3}px)`}}>
<img  className='body3img3' src={bit7} alt="" srcset="" />
</div>
    </Grid>
</Grid>
    </>
  )
}

export default Body3