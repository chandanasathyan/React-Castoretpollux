
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contact from './Pages/contact/Contact';
import Home from './Pages/home/Home';
import {motion} from "framer-motion";
import { height, margin } from '@mui/system';



function App() {

  // const [mouseposition,setMouseposition] = useState({
  //   x:0,
  //   y:0
  // })

// const [cursorvarient,setCursorvarient]  =  useState("default")


//   useEffect(()=>{

// const mouseMove = e =>{
// setMouseposition({
  
//   x: e.clientX,
//   y: e.clientY
// })

// }


// window.addEventListener("mousemove",mouseMove)

// return () =>{
//   window.removeEventListener("mousemove",mouseMove)
// }
//   },[])

// const variants = {
//   default:{
//     x:mouseposition.x,
//     y:mouseposition.y

//   }
// }




  return (
    <div>

   
  
    <Header/>
    
    {/* <motion.div className='cursor'
      variants={variants}      animate="default"  /> */}
   

      
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    
    <Footer/>


    </div>
  );
}

export default App;
