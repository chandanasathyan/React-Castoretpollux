import { Drawer, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Drawericon.css"


const Drawericon = () => {
   const [open,setOpen] = useState(false)

  return (
    <div>
 <Grid container sx={{ display: { xs: 'flex', sm:"flex", md:"none", lg: 'none', xl: 'none' } }} >
    <Drawer   anchor='right' PaperProps={{
     sx:{backgroundColor:"#fff",width:"100%"}
    }} open={open}  >
   <div className='close' >
    <p onClick={()=>{setOpen(false)}}>close</p>
    </div>
<div className='navtablink' > 
<ul>
    <li><Link className='navtablink1' to="/agency">the agency</Link>  </li>

<li><Link className='navtablink1' to="/skills">skills</Link>  </li>
<li><Link className='navtablink1' to="/achievements">achievements</Link>  </li>
<li><Link className='navtablink1' to="/digitalbriefs">digital briefs</Link>  </li>
 <li><Link className='navtablink1' to="/contact">Contact</Link>  </li>


</ul>
</div>
<div className='navtabbutton'>
  <button className='navtabbutton1' >the group <i  class="fa fa-arrow-right" aria-hidden="true"></i></button>
 
  </div>
     </Drawer>
     <div className='navfabar'>
     <Typography  onClick={()=>setOpen(true)}><button  className='navfabars' ><i class="fa fa-bars" aria-hidden="true"></i></button>  </Typography>
     </div>
     </Grid>
    </div>
  )
}

export default Drawericon