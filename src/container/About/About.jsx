import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>blockchain and AI </span> more impactful<br/>Than <span>Fire and  Electricity</span></h2>
      {/* <h4 className="head-text-2">In alignment with Pichai's words (Google CEO), </h4> */}
      <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5, delayChildren: 1 }}
            >
      <h4 className="p-4 my-4 mt-10  text-center max-w-[450px] bg-[#edf2f8] rounded-[20px] align-middle">I strongly believe that the impact Blockchain and AI will have in the next years will surpass what fire and electricity brought to our society!</h4>
      <h4 className="head-text-2">As a tech-lover and human, my job here is to accelerate this process with my unique web3, cloud and development skills</h4>
      <h4 className="head-text-2 font-bold"><span>I have pratical experience in the following topics:</span></h4>

      </motion.div>
      
      <div className="app__profiles max-w-[1100px]">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            // whileHover={{ scale: 1.05 }}
            // transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item hover:transform hover:scale-110 transition duration-500 " 
            key={about.title + index}
          >
            <motion.div  
              whileHover={{ scale: 1.02 }} 
              // transition={{ duration: 0.5, type: 'tween' }}
              className='mx-auto'
              >
            <img src={urlFor(about.imgUrl)} alt={about.title} className='animate-wiggle hover:transform hover:scale-110 transition duration-500' />
            </motion.div>
            <h2 className="bold-text text-[18px] text-center mx-auto" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text text-[16px]" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
   MotionWrap(About, 'app__about'),
   'about',
   'app__whitebg',
 );