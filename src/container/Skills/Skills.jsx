import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { images } from '../../constants';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImPhone, ImProfile } from 'react-icons/im'

const mockedSkills = [
  {
      "icon": {
          "asset": {
              "_ref": "image-7d93a3e2e03a22a586b2818da8d30dfc8b4c01b6-640x640-png",
              "_type": "reference"
          },
          "_type": "image"
      },
      "name": "Git",
      "_id": "0307eb1b-8bcf-4f35-b4e0-e4c7ad0c0332",
      "_updatedAt": "2023-04-22T22:46:43Z",
      "_createdAt": "2023-04-22T22:46:16Z",
      "_rev": "w8hBPBFSOpF49Odj3ge3L5",
      "_type": "skills"
  },
  {
      "_createdAt": "2022-03-14T20:17:08Z",
      "_rev": "x5CwOtq6xUz1QVBaFmvmPS",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-0bf0930688351918b27377b036e4b9623e6995bb-400x400-jpg",
              "_type": "reference"
          }
      },
      "name": "AWS",
      "_id": "07fce965-83ab-4b8e-9846-66828ffd4544",
      "_updatedAt": "2023-04-20T11:10:16Z"
  },
  {
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-070b7d76cb1c9e12011836a5374fbad3af98649f-834x731-png",
              "_type": "reference"
          }
      },
      "name": "Scrum",
      "_id": "21757068-94b8-4b08-9d87-15fd4cdcba8e",
      "_updatedAt": "2023-04-22T22:48:23Z",
      "_createdAt": "2023-04-22T22:48:23Z",
      "_rev": "w8hBPBFSOpF49Odj3ghIJd",
      "_type": "skills"
  },
  {
      "_rev": "x5CwOtq6xUz1QVBaFmudac",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-2d98f3624b990dd2a467aea6c5644593498433d9-600x600-png",
              "_type": "reference"
          }
      },
      "name": "Hardhat/Truffle",
      "_id": "32a202cc-5ff1-44d0-bd00-4aa45f177f3b",
      "_updatedAt": "2023-04-20T10:51:38Z",
      "_createdAt": "2022-03-16T10:13:44Z"
  },
  {
      "name": "Ethers.js/Web3.js",
      "_id": "5c85dd94-a913-4918-859b-e240be80df93",
      "_updatedAt": "2023-04-20T10:51:51Z",
      "_createdAt": "2022-03-16T10:09:16Z",
      "_rev": "TdTbXmQ5Bi2orb10hASzwa",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-00539620127536818e16326d6c179ce38e0d2e74-400x400-png",
              "_type": "reference"
          }
      }
  },
  {
      "_createdAt": "2022-03-16T09:41:33Z",
      "_rev": "x5CwOtq6xUz1QVBaFmug54",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-f72fb0ceb8f917791ab08a857109e7879aa13ef2-300x300-png",
              "_type": "reference"
          }
      },
      "name": "React/Next.js",
      "_id": "b420d076-b50d-4cb0-a862-85c9f6af6754",
      "_updatedAt": "2023-04-20T10:52:12Z"
  },
  {
      "_rev": "xnBg0xhUDzo561jnXCeTf0",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-ef747829cb52556edb79799e1bef0608e73f1869-401x401-png",
              "_type": "reference"
          }
      },
      "name": "Solidity",
      "_id": "c6e1bb40-cf5b-47c4-8f42-98fdb07c0103",
      "_updatedAt": "2022-03-16T09:35:44Z",
      "_createdAt": "2022-03-16T09:35:27Z"
  },
  {
      "name": "TypeScript",
      "_id": "dd13a029-6ce4-4da8-b80f-997f300fc2df",
      "_updatedAt": "2022-03-16T09:39:24Z",
      "_createdAt": "2022-03-16T09:37:40Z",
      "_rev": "9by72vG2l204L0eD6FIKkA",
      "_type": "skills",
      "icon": {
          "_type": "image",
          "asset": {
              "_ref": "image-e2aa18ea125a56a49a3bac63ae93d4b3eb50f6b6-600x600-png",
              "_type": "reference"
          }
      }
  }
]
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    setSkills(mockedSkills);
    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });
  }, []);
  return (
    <>
      <div className='bg-[#edf2f8] rounded-lg shadow-lg max-w-[1050px]'>
      <h2 className="head-text mt-10 mb-4">Experiences <span>& </span> Skills </h2>
      <div className="name flex mx-auto flex-col md:flex-row pt-[20px] mx-auto justify-center" >
      <img className="image mx-auto justify-center min-w-[300px] min-h-[300px] mx-auto flex flex-row"
         src={images.profilepic} alt=""/>
        <div className="flex flex-col my-auto mx-auto md:ml-[-100px] space-y-2">
          <h3 className='text-[26px]'>Victor Henrique Collasanta</h3>
          <p className='p-text text-[14px] pb-3'>• 26 years old, Fluent English, UTC/GMT -3 hours </p>
          {/* <p className='pb-3 p-text text-[14px]'>• </p> */}

        <div className="flex flex-col justify-center align-middle text-center my-auto space-y-4 pb-3 min-w-[20px] min-h-[20px]">
          <div className='flex flex-row'>
            <a className='align-middle pt-1 pr-2' href='https://www.linkedin.com/in/victor-collasanta-a4b9a913b/'><BsLinkedin color="black" /></a>
            <a className='p-text text-[14px]' href='https://www.linkedin.com/in/victor-collasanta-a4b9a913b/'>https://www.linkedin.com/in/collasanta</a>
          </div>
          <div className='flex flex-row'>
            <a className='align-middle pt-1 pr-2' href='https://github.com/COLLASANTA'><BsGithub color="black" /></a>
            <a href='https://github.com/COLLASANTA' className='p-text text-[14px]'>https://github.com/collasanta</a>
          </div>
          <div className='flex flex-row'>
            <a className='align-middle pt-1 pr-2' href='tel:+5511996171599'><ImPhone color="black"/></a>
            <a href='tel:+5511996171599' className='p-text text-[14px]'>Phone: +5511999121533</a>
          </div>
          <div className='flex flex-row'>
            <a className='align-middle pt-1 pr-2' href='/CV.pdf'><ImProfile color="black"/></a>
            <a href='/CV.pdf' className='p-text text-[14px]'>Resume</a>
          </div>
        </div>
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