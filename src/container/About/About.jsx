import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  // const [abouts, setAbouts] = useState([]);
  const abouts = [
    {
      "imgUrl": {
        "_type": "image",
        "asset": {
          "_ref": "image-d236efa80e7a358cf3dac7cb6a2f76e87f31d6b7-360x360-png",
          "_type": "reference"
        }
      },
      "description": "With a passion for macroeconomics and a background in finance, I moved my career from traditional finance to DeFi and Blockchain, building and testing smart contracts fo web3 projects, including dev and prod of ERC-20, ERC-1155, and ERC-721 tokens with Solidity, Hardhat, Truffle on EVM chains, and used other web3 tools like OpenZeppelin and Chainlink. Created custom solutions implementing and interacting with DeFi protocols such as UniswapV3.",
      "title": "DeFi and Blockchain"
    },
    {
      "title": "Backend Development",
      "imgUrl": {
        "_type": "image",
        "asset": {
          "_ref": "image-f42e990b0ad83a33fcd0b963430d2b670fce3d1d-600x600-gif",
          "_type": "reference"
        }
      },
      "description": "Architected, built and manipulated relational (PostgreSQL) and non-relational (MongoDB) databases, API and SDK’s development, mostly using Node.js, and ORMs and ODMs such as Prisma and Moongose.",
    },
    {
      "title": "Cloud and Infra",
      "imgUrl": {
        "_type": "image",
        "asset": {
          "_ref": "image-9938874542ce1deadd97aef668482004f7d93775-512x512-gif",
          "_type": "reference"
        }
      },
      "description": "Worked on projects that involve using and implementing cloud infrastructure, mostly on AWS and Azure, including working with services such as API's gateways, serverless functions, Docker containers and CI/CD Pipelines. Additionally, I hold the AWS Solutions Architect Associate Certification",
    },
    {
      "_updatedAt": "2023-04-19T21:49:35Z",
      "imgUrl": {
        "_type": "image",
        "asset": {
          "_ref": "image-7dfa15a00752cf7b2244b772fca9b84df3ea68d2-600x600-gif",
          "_type": "reference"
        }
      },
      "description": "Worked on projects developing strongly-typed front-ends with Typescript, mostly using Next.js and React, as well as state management tools like useContext and Redux. I also integrated these front-ends with blockchains using libraries such as Ethers.js and Web3.js, interacting with various wallets using Metamask and Web3Modal / WalletConnect libs",
      "title": "Frontend Development"
    },
    {
      "imgUrl": {
        "_type": "image",
        "asset": {
          "_ref": "image-a2892428f1a30cd5d0950bca8f84fe3551902667-600x600-gif",
          "_type": "reference"
        }
      },
      "description": "Built and Deployed Chatbots with custom enterprise knowlodge leveraging opensource LLM models, RAG, and OpenAI API`S, Worked with Python and R for data analysis and machine learning models. I been leveraging GitHub Copilot to speed up my dev proccess and productivity, and I keep up with the latest AI advancements on a daily basis",
      "title": "AI"
    },
  ]
  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text"><span>blockchain and AI </span> more impactful<br />Than <span>Fire and  Electricity</span></h2>
      {/* <h4 className="head-text-2">In alignment with Pichai's words (Google CEO), </h4> */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 1 }}
      >
        <h4 className="p-4 my-4 mt-10 border-2  text-center max-w-[450px] mx-auto bg-[#edf2f8] rounded-[20px] align-middle text-[#6b7688]">I believe that the impact Blockchain and AI will have in the next years will surpass what fire and electricity brought to our society!</h4>
        <h4 className="head-text-2">As a tech-lover and human, my job here is to learn and accelerate this process with my skills</h4>
        <h4 className="head-text-2 font-bold"><span>I have pratical experience in the following topics:</span></h4>

      </motion.div>

      <div className="app__profiles max-w-[1100px]">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            // whileHover={{ scale: 1.05 }}
            // transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item border-2 rounded-lg  hover:transform hover:scale-110 transition duration-500 text-center"
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
            <p className="p-text text-[16px] text-center p-4" style={{ marginTop: 10 }}>{about.description}</p>
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