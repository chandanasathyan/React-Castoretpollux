import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Body5.css"
import septodont from "../../Assests/septodont.png"
import nct from "../../Assests/nct.png"
import cyclofix from "../../Assests/cyclofix.png"
import cftc from "../../Assests/la-cftc.png"
import {motion} from "framer-motion";

function Body5() {

  const [mouseposition,setMouseposition] = useState({
    x:0,
    y:0
  })

const [cursorvarient,setCursorvarient] = useState("default")


  useEffect(()=>{

    const mouseMove = e =>{
    setMouseposition({
      
      x: e.clientX,
      y: e.clientY
    })
    
    }
    
    
    window.addEventListener("mousemove",mouseMove)
    
    return () =>{
      window.removeEventListener("mousemove",mouseMove)
    }
      },[])
    
    const variants = {
      default:{
     
        x:mouseposition.x,
        y:mouseposition.y,
        height: 7,
        width: 7,
marginLeft:25,
marginTop:20
      },
      text:{
        height: 70,
        width: 70, 
        x:mouseposition.x,
        y:mouseposition.y,
        marginLeft:-30,
marginTop:-30,
backgroundColor:"black"
     
      }
    }


 const textenter = ()=> setCursorvarient("text") 
 const textleave = () =>   setCursorvarient("default") 













  return (
    <div className='body55'>
         <motion.div className='cursor'
      variants={variants}      animate={cursorvarient}  />
<Grid  onMouseEnter={textenter} onMouseLeave={textleave} container >
    <Grid item xs={12} sm={12} md={5} >
<div className='body5img'>

<img className='body5img1' src={septodont} alt="" srcset="" />

</div>
<div className='body5text'>
<p className='body5text1'>septodont</p>
<p className='body5smalltext2'>retail--brand content--crm</p>
</div>


    </Grid>
    <Grid item xs={12} sm={12} md={5} >

    <div className='body5img'>

<img className='body5img2' src={nct} alt="" srcset="" />

</div>

<div className='body5text22'>
<p className='body5text21'>NTC</p>
<p className='body5smalltext22'>real estate--site</p>
</div>

    </Grid>
</Grid>

{/*  */}

<motion.div className='cursor'
      variants={variants}      animate={cursorvarient}  />
<Grid onMouseEnter={textenter} onMouseLeave={textleave} container>
  <Grid item xs={12} sm={12} md={5} className='body5images' >
  <div className='body5img'>

<img className='body5img3' src={cyclofix} alt="" srcset="" />

</div>

<div className='body5text333'>
<p className='body5text3'>Cycloficx</p>
<p className='body5smalltext3'>service--brand platform--site</p>
</div>


  </Grid>
  <Grid item xs={12} sm={12} md={5} >

  <div className='body5img'>

<img className='body5img4' src={cftc } alt="" srcset="" />

</div>

<div className='body5text3333'>
<p className='body5text33'>CFTC</p>
<p className='body5smalltext33'>service--brand content</p>
</div>


</Grid>

</Grid>



    </div>
  )
}

export default Body5