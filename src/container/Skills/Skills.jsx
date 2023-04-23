import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { images } from '../../constants';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im'

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <div className='bg-[#edf2f8] rounded-lg shadow-lg max-w-[1050px]'>
      <h2 className="head-text mt-10 mb-4">Experiences <span>& </span> Skills </h2>
      <div className="name flex mx-auto flex-col pt-[20px] mx-auto justify-center" >
      <img className="image mx-auto justify-center min-w-[300px] min-h-[300px] mx-auto flex flex-row"
         src={images.profilepic} alt=""/>
        <div className="text-center flex flex-col my-auto align-middle">
        <div className="flex flex-row justify-center align-middle text-center my-auto space-x-3 pb-3 min-w-[20px] min-h-[20px]">
          <a href='https://www.linkedin.com/in/victor-collasanta-a4b9a913b/'><BsLinkedin color="black" /></a>
          <a href='https://github.com/COLLASANTA'><BsGithub color="black"/></a>
          <a href='/CV.pdf'><ImProfile color="black"/></a>
        </div>
          <h3>Victor Henrique Collasanta</h3>
          <p>26 years old</p>
        </div>

      </div>
      <div className="app__skills-container md:pl-14 ">
        <motion.div className="app__skills-list mx-auto">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp pl-4 md:pl-20 md:pt-12 pr-4">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      </div>
    </>
  );
};

export default AppWrap(
   MotionWrap(Skills, 'app__skills'),
   'experience',
   'app__whitebg',
 );