import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawericon from './Drawericon'
import "./Header.css"
import logo from "../../Assests/logo.png"
import tablogo from "../../Assests/tablogo.png"



const Header = () => {

const [color,setColor] = useState(false)

const changeColor = ()=>{
  if(window.scrollY >=90 ){
    setColor(true)
  }
  else{
    setColor(false)
  }
}
window.addEventListener("scroll",changeColor)

  return (
    <div>
    <AppBar  sx={{background:"transparent",boxShadow:"none"}} className='navbar'  >
        <Toolbar>
        <Grid container spacing={2} id={color?"appbar1":"appbar"} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' ,lg:"flex" } }}>
  
        <Grid className='logoimg' item xs={1}>
          <img src={logo} alt="" srcset="" />
        </Grid>
  <Grid className='navlogo' item xs={2}>

 
<p>  <Link className='navlogo1' to="/">CASTOR & POLLUX</Link></p>  


  </Grid> 
  <Grid style={{textDecoration:"none"}} className='navlink' item xs={7}>
  <nav >
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/agency">the agency</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/skills">skills</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/achievements">achievements</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/digitalbriefs">digital briefs</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/contact">Contact</Link>  

</nav>
  </Grid> 
 <div className='navbutton'>
  <button >the group <i  class="fa fa-arrow-right" aria-hidden="true"></i></button>
 
  </div>

  </Grid>  

  {/* tab */}

 <Grid container sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' ,lg:"none" } }} >
 <Grid className='navtablogo'  item xs={11} sm={11}>
 <p><Link className='navtablogo1' to="/"> <img src={tablogo} alt="" srcset="" /> </Link></p>  
 </Grid>
  <Grid className='icontab'  item xs={1} sm={1}>
   <Typography className='icontab1'> <Drawericon/> </Typography>
   </Grid>
   </Grid> 
        </Toolbar>
        
        </AppBar>  
   

    </div>
  )
}

export default Header