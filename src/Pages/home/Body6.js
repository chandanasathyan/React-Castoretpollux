import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Body6.css"
import {motion} from "framer-motion";
import body6 from "../../Assests/body6image.jpg"
import body61 from "../../Assests/body61image.jpg"
import body62 from "../../Assests/body62image.jpg"
import body64 from "../../Assests/body64image.jpg"

function Body6() {

//  const [card, setCard] = useState("")




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
    backgroundColor:"black",
       
          }
        }
    
    
     const textenter = ()=> setCursorvarient("text") 
     const textleave = () =>   setCursorvarient("default") 
    




  return (
    <>
<Grid container>
    <Grid item xs={12} sm={12} md={5}>
        <div >
            <p className='body6head1'>
            Our digital briefs
            </p>
        </div>
    </Grid>
    <Grid item xs={12} sm={12} md={5}>
        <div>
            <p className='body6para1'>
    
Every day, our intrepid explorers scour the web for hot topics of the moment!
            </p>
            <p  className='body6hover'><i class="fa fa-play" aria-hidden="true"></i>  view hot topics</p>
        </div>
    </Grid>
</Grid>

{/* body6 2 */}

<Grid    container>
<motion.div className='cursor'
      variants={variants}      animate={cursorvarient}  ></motion.div>
   
    <Grid item xs={12} sm={12} md={5}>
        <div className="maindiv">
           <p className='body6date'>17.05.2021 _</p>
           <div onMouseEnter={textenter} onMouseLeave={textleave}  >
           <p   className='body6datepara'>Twitch, the television of Gen Z</p>
           <img className='imagesbody61' src={body61}  alt="" ></img>
           </div>
        </div>
    </Grid>
    <Grid item xs={12} sm={12} md={5}>

        <div className="maindiv" >
            
        <p className='body6date2'>04.01.2021 _</p>
           <p onMouseEnter={textenter} onMouseLeave={textleave} className='body6datepara2'>DIY content strategy version: how to create your editorial calendar?</p>
           <img className='imagesbody62' src={body62} alt="" ></img>
        </div>
    </Grid>
</Grid>


{/*  */}

<Grid container>
    <Grid item xs={12} sm={12} md={5}>
        <div className="maindiv">
           <p className='body6date3'>10.12.2020 _</p>
           <p onMouseEnter={textenter} onMouseLeave={textleave} className='body6datepara3'>Fight against received ideas in UX? We say UI</p>
           <img className='imagesbody6' src={body6}  alt="" ></img>
        </div>
    </Grid>
    
    <Grid item xs={12} sm={12} md={5}>
        <div className="maindiv">
            
        <p className='body6date4'>19.06.2020 _</p>
           <p onMouseEnter={textenter} onMouseLeave={textleave} className='body6datepara4'>Instagram filters: put glitter in stories</p>
           <img className='imagesbody64' src={body64}  alt="" ></img>
        </div>
    </Grid>
</Grid>
    </>
  )
}

export default Body6