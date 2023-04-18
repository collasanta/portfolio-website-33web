import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import AppWrap from '../../wrapper/AppWrap';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <motion.div className="badge-cmp app__flex"  whileHover={{ scale: 1.1}} >
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hi, my name is </p>
            <h1 className="head-text text-left">Victor Collasanta</h1>
          </div>
        </motion.div>
        <motion.div className="tag-cmp app__flex" whileHover={{ scale: 1.1}}>
          <p className="p-text">I am a <strong>FullStack Web3 Developer</strong></p>
          <p className="p-text">THAT LOVES <strong>BUILDING SOLUTIONS</strong></p>
          <p className="p-text">WITH <strong>HIGH END TECH</strong></p>
        </motion.div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 3, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <div className="circle_animation">
        <motion.img
          transition={{ repeat: Infinity, duration: 5 }}
          whileInView={{rotate: [0,360]}}
          src={images.logosnake}
          alt="profile_circle"
          className="overlay_circle"
        />
      </div>     */}
      <motion.img src={images.profilepic} whileHover={{ scale: 1.1}} alt="profile_bg" className="core_logo" />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.solidity, images.ethereum].map((circle, index) => (
        <motion.div whileHover={{ scale: 1.2}} className="circle-cmp app__flex" key={`circle-${index}` }>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
