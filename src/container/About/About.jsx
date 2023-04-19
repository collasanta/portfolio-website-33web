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
      <h4 className="head-text-2">In alignment with Sundar Pichai's words (Google CEO), </h4>
      <h4 className="head-text-2">I strongly believe that the impact Blockchain and AI will have in the next years will surpass what fire and electricity brought to our society!</h4>
      <h4 className="head-text-2">As a tech-lover and human, my job here is to accelerate this process with my unique web3, cloud and development skills</h4>
      <h4 className="head-text-2"><span>I have pratical experience in the following topics:</span></h4>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
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