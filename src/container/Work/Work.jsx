import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const mockedProjects = [
  // {
  //     "_createdAt": "2022-06-30T13:03:46Z",
  //     "codeLink": "https://github.com/collasanta/33Developer-Punks",
  //     "title": "33 Developer Punks",
  //     "_type": "workprojects",
  //     "description": "Fully developed by me, the 33 Developer Punks are a collection of 10.000 unique random generated NFT's that live on the Polygon Blockchain. ",
  //     "_id": "7d6cd7d0-49fa-4c35-b3a9-92a36e595494",
  //     "_updatedAt": "2023-04-20T12:37:48Z",
  //     "tags": [
  //         "All",
  //         "NFT",
  //         "App"
  //     ],
  //     "imgUrl": {
  //         "_type": "image",
  //         "asset": {
  //             "_ref": "image-209d23a2015c1c9c0c9112904c79b4151bc1c8e7-720x720-gif",
  //             "_type": "reference"
  //         }
  //     },
  //     "projectLink": "https://33-developer-punks.vercel.app/",
  //     "_rev": "UquI6ukxBXjuUEtLPfRcfB"
  // },
  // {
  //     "_createdAt": "2022-06-30T13:03:48Z",
  //     "codeLink": "https://github.com/collasanta/33Developer-Punks",
  //     "title": "33 Tora Developer Punks",
  //     "_type": "workprojects",
  //     "description": "Fully developed by me, the 33 Developer Punks are a collection of 10.000 unique random generated NFT's that live on the Polygon Blockchain. ",
  //     "_id": "7d6cd7d0-49fa-4c35-b3a9-92a36e595494",
  //     "_updatedAt": "2023-04-20T12:37:48Z",
  //     "tags": [
  //         "All",
  //         "NFT",
  //         "App"
  //     ],
  //     "imgUrl": {
  //         "_type": "image",
  //         "asset": {
  //             "_ref": "image-209d23a2015c1c9c0c9112904c79b4151bc1c8e7-720x720-gif",
  //             "_type": "reference"
  //         }
  //     },
  //     "projectLink": "https://33-developer-punks.vercel.app/",
  //     "_rev": "xxuI6ukxBXjuUEtLPfRcfB"
  // },
  {
      "_type": "workprojects",
      "_updatedAt": "2023-04-20T12:39:47Z",
      "imgUrl": {
          "_type": "image",
          "asset": {
              "_ref": "image-ac7ec28e72fcae054befc0efe4aaf262714307b9-600x600-png",
              "_type": "reference"
          }
      },
      "codeLink": "https://github.com/collasanta/baby-gender-prediction",
      "_rev": "x5CwOtq6xUz1QVBaFn3LWA",
      "description": "BabyPool is a baby gender guessing game i developed for a coworker, were people can bet on  the expected gender of the child and receive rewards if right, all the process occurs via a smartcontract developed specifically to this purpose",
      "_id": "9cdb9e59-e6b8-463e-8abe-3846e01b1200",
      "title": "BabyPool",
      "tags": [
          "All",
          "App"
      ],
      "projectLink": "https://baby-gender-prediction.vercel.app/",
      "_createdAt": "2022-08-29T17:37:24Z"
  },
  {
      "imgUrl": {
          "_type": "image",
          "asset": {
              "_ref": "image-b061f3202be40a57b3748f4547a03f2ca823bfe0-300x300-gif",
              "_type": "reference"
          }
      },
      "description": "The Teko NFT project won 4 sponsorship prizes at the Ethereum SP 2022 Hackathon event. It's a community-driven project where you can buy an NFT ERC-1155 to support hotels and their local economies. After purchasing the NFT, you automatically start receiving custom ERC-20 tokens that can be used to claim real benefits.",
      "title": "Ethereum SP Hackaton Winner",
      "_type": "workprojects",
      "_id": "a0af8c38-f87c-4a36-b00a-b6d0b456534b",
      "_updatedAt": "2023-04-25T17:43:54Z",
      "tags": [
          "All",
          "App",
          "NFT"
      ],
      "projectLink": "https://teko.earth",
      "_createdAt": "2022-09-15T18:03:50Z",
      "codeLink": "https://github.com/collasanta/teko",
      "_rev": "4MfBp9HJw6JHUbUYbZ0vQT"
  },
  {
      "imgUrl": {
          "_type": "image",
          "asset": {
              "_type": "reference",
              "_ref": "image-147a4a7ebc96851448343ab0a869913a2d16abbf-600x600-png"
          }
      },
      "codeLink": "https://github.com/collasanta/DeTrash-LP",
      "_type": "workprojects",
      "_updatedAt": "2022-07-01T18:45:36Z",
      "_id": "ca9b0ad8-143e-406d-bca3-8b14bbef4cd2",
      "title": "cRECY Token ",
      "tags": [
          "All",
          "Defi",
          "DAO",
          "App"
      ],
      "projectLink": "https://www.detrash.org/",
      "_createdAt": "2022-06-30T13:12:50Z",
      "_rev": "Mh5Zd5avA7FZo7mV0Ac1Mr",
      "description": "Development of the infrastructure to sell the cRECY Token. A token created by the DeTrash Organization, to transform how we can keep the entire planet clean in a decentralized way"
  },
  {
      "codeLink": "https://github.com/collasanta/33defi",
      "_rev": "0q8U7eBNYOT96MpGI2wM4i",
      "description": "A custom made Swap App that collect extra fees from swaps based on the dollar amount of the order by manipulating the uniswapV3 protocol via an intermediary contract",
      "tags": [
          "All",
          "Defi",
          "App"
      ],
      "projectLink": "https://33defi.vercel.app/",
      "_createdAt": "2022-08-19T01:05:40Z",
      "_type": "workprojects",
      "_id": "ff338688-933a-4e7e-9673-d6a02925ca62",
      "title": "UniV3 Swap Collector",
      "_updatedAt": "2022-08-19T01:08:22Z",
      "imgUrl": {
          "_type": "image",
          "asset": {
              "_ref": "image-959de5eebb05a5eae689159365384eca7c91d170-600x600-png",
              "_type": "reference"
          }
      }
  }
]

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    setWorks(mockedProjects)
    setFilterWork(mockedProjects);
    // const query = '*[_type == "works"]';
    // client.fetch(query).then((data) => {
    //   setWorks(data);
    //   setFilterWork(data);
    // });
  }, []);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Check our <span>Services</span> </h2>
      <div className="app__work-filter">
        {['SaaS','NFT', 'Defi', 'DAO', 'App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {console.log("filterWork: ",filterWork)}
        {console.log("works: ")}
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                  </motion.div>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);