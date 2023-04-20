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
      transition={{ duration: 1 }}
      className="app__header-info md:pr-7"
    >
      <div className="app__header-badge z-0">
        <motion.div className="badge-cmp app__flex max-w-[300px] max-h-[250px]"  whileHover={{ scale: 1.1}} >
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text text-[16px] ">Hi, my name is </p>
            <h1 className="head-text text-left md: text-[40px] ">Victor Collasanta</h1>
          </div>
        </motion.div>
        <motion.div className="tag-cmp app__flex" whileHover={{ scale: 1.1}}>
          <p className="p-text text-[16px] md:text-[15px]">I am a <strong>FullStack Web3 Developer</strong></p>
          <p className="p-text text-[16px] md:text-[15px]">that loves <strong>Building Solutions</strong></p>
          <p className="p-text text-[16px] md:text-[15px]">with <strong>Disruptive Tech</strong></p>
        </motion.div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, delayChildren: 0.5 }}
      className="app__header-img"
    >

      <motion.img src={images.profilepic2} whileHover={{ scale: 1.07}} alt="profile_bg"
       className="core_logo z-10" />
  
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, delayChildren: 0.5 }}
      className="app__header-circles md:pl-[150px]"
    >
      {[images.solidity,  images.awsarc, images.ts, images.next].map((circle, index) => (
        <motion.div whileHover={{ scale: 1.2}} className="circle-cmp app__flex" key={`circle-${index}` }>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
