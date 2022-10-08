import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Home.css"
// import { Parallax } from 'react-parallax';
import Body from './Body';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
import Body5 from './Body5';
import Body6 from './Body6';
import {motion} from "framer-motion";
import { color } from '@mui/system';


const Home = () => {

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
marginTop:20,

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
        <>
          <Grid container sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <motion.div className='cursor'
      variants={variants}      animate={cursorvarient}  />
   
       <div  onMouseEnter={textenter} onMouseLeave={textleave} >
  <div     className='banner'>

    < div  className='contents'>

    <div  className='content1'>
  NOTohas
 
</div>



<div className='content1'>
  fhasIsohnots de
</div>



<div className='content2'>
 vohyoure
 </div>
 

 <div className='content3'>
 eyouhIqae,
 </div>



 <div className='content4'>
 anot 
 </div>



 <div className='content5'>
 youemp<span id="web" >erhasmenotyou</span>
 </div>


</div>
  </div>
  </div> 
  </Grid>



  {/* tab */}



  <Grid container sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
  <motion.div className='cursor'
      variants={variants}      animate={cursorvarient}  />
  <div   onMouseEnter={textenter} onMouseLeave={textleave}  className='banner'>
<div className='contentstab'>
<div className='contenttab1'>
NOTohas
</div>
<div className='contenttab2'>
fhasIsohnots de  vohyoure
</div>
<div className='contenttab2-5'>
eyouhIqae,  anot 
</div>
<div className='contenttab5'>
 youemperhasmenotyou
 </div>

</div>


  </div>
  </Grid>



{/* body */}

<Body/>

<Body2/>

<Body3/>

<Body4/>

<Body5/>

<Body6/>


    </>
   
  )
}

export default Home