import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const[menuOpened, setMenuOpened]= useState(false);
  return (
    <div className='Header'>
        <img src={Logo} alt="" className='logo'/>
        {menuOpened===false && mobile===true ? (
          <div
          style={{backgroundColor:'var(--appColor)',
          padding:'0.5rem',
          borderRadius:'5px',
        marginLeft: '24.5rem',
      marginTop:'-3rem',
      position: 'fixed'}}
          onClick={()=>setMenuOpened(true)}
          >
            <img src={Bars} alt="" 
            style={{width:'1.5rem',height:'1.5rem'}} />
          </div>
        ) : (
        <ul className='header-menu'>
        
        <li onClick={()=>setMenuOpened(false)}>
          <Link
          onClick={()=>setMenuOpened(false)}
          to='home'
        span={true}
        smooth={true}
          >Home</Link>
        </li>
        <li><Link
        onClick={()=>setMenuOpened(false)}
        to='programs'
        span={true}
        smooth={true}
        >Programs</Link></li>
      <li><Link
        onClick={()=>setMenuOpened(false)}
        to='reasons'
        span={true}
        smooth={true}
        >Why Us</Link></li>
        <li><Link
        onClick={()=>setMenuOpened(false)}
        to='plan'
        span={true}
        smooth={true}
        >Plans</Link></li>
        
        <li><Link
        onClick={()=>setMenuOpened(false)}
        to='Testimonials'
        span={true}
        smooth={true}
        >Testimonials</Link></li>
    </ul>
    )}
      
    </div>
  );
;}

export default Header