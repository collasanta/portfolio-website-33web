import React, { useState } from 'react';
import './Navbar.scss'
import {images} from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
   const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar shadow-md'>
      <div className='app__navbar-logo'>
         <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
         {['home','about', 'experience', 'projects', 'contact' ].map((item)=> (
            <li className='"app__flex p-text' key={`link-${item}`}>
               <div />
               <a href={`#${item}`}>{item}</a>
            </li>

         ))}
      </ul>
      {/* <a className='language' href='https://br.33web.me/'><img src={images.brflag} alt="brazil flag" /></a> */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {/* <a className='language2' href='https://br.33web.me/'><img src={images.brflag} alt="brazil flag" /></a> */}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
