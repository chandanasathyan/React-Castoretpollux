import { Grid } from '@mui/material'
import React from 'react'
import "./Footer.css"



const Footer = () => {
  return (
    <>
   <Grid container sx={{ display: { xs: 'none', sm: 'none', md: "flex" } }}>



<Grid item xs={12} sm={12} md={12}>
<div className='footer'>
<li className='footlink'>facebook</li>
<li className='footlink'> vimeo</li>
<li className='footlink'> instagram</li>
<li className='footlink'> joker</li>
<li className='footlink'> csr</li>
<li className='footlink1'>the sky is blue</li>
<li className='footlink'> hello</li>


<div className='foot'>
<li  className='footlink'>charter for the use of cookies</li>
<li  className='footlink'> terms of use</li>
<li  className='footlink'>  jobs</li>
</div>
</div>
</Grid>
</Grid>



{/* tab footer */}


<Grid container  sx={{ display: { xs: 'flex', sm: 'flex', md: "none" } }}>
<Grid item xs={6} sm={6} >
<div className='tabfooter'>

<li className='footlink'>facebook</li>
<li className='footlink'>instagram</li>


<li className='footlink'>csr</li>
<li className='footlink'>hello</li>

</div>


</Grid>

<Grid item xs={6} sm={6} >
<div className='tabfooter1'>

<li className='footlink'>vimeo</li>
<li className='footlink'>joker</li>

<li className='footlink1'>the sky is blue</li>


</div>


</Grid>

<Grid item xs={7} sm={7} >
<div className='tabfooter2'>

<li  className='footlink'>charter for the use of cookies</li>


<li  className='footlink'> terms of use</li>

<li  className='footlink'>  jobs</li>

</div>


</Grid> 


   </Grid>
    
    </>
  )
}

export default Footer