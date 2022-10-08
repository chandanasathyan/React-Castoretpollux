import { colors, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import "./Body4.css"


const Body4 = () => {

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
            height: 300,
            width: 300, 
            x:mouseposition.x,
            y:mouseposition.y,
            marginLeft:-150,
    marginTop:-150,
    backgroundColor:" blue"
 
  }
        }
    
    
     const textenter = ()=> setCursorvarient("text") 
     const textleave = () =>   setCursorvarient("default") 
    
    




  return (
    <>
     <Grid container >
      <motion.div  className='car'
      variants={variants}      animate={cursorvarient}  />

      <div onMouseEnter={textenter} onMouseLeave={textleave}>

<div   className='body4banner'>
    <p className='body4bannerpara'>
        Gave <i>shape</i>
    </p>
<p className='body4bannerpara4'>
to your ambition 
</p>

<p className='body4bannerpara4'>
& your ideas
</p>
<p className='body4bannerpara4'>
to create an 
</p>

<p className='body4bannerpara4'>
 experience
</p>

<p className='body4bannerpara4'>
that <i>marks.</i>
</p>
</div>
</div>
</Grid>


<Grid container>
    <Grid item xs={12} sm={12} md={6} lg={6}>
<div className='body4h1'>
<p>Our achievements</p>
</div>


    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>

    <div className='body4h2'>
<p>No more big words, place to example: discover our latest achievements.</p>
</div>

<p  className='body4hover'><i class="fa fa-play" aria-hidden="true"></i> see our achievements</p>

</Grid>

</Grid>


    </>
  )
}

export default Body4