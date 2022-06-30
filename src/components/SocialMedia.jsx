import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    
    <a href='https://github.com/COLLASANTA'> <div><BsGithub /></div></a>
    {/* <div>
      <FaFacebookF />
    </div> */}
    
    <a href='https://www.linkedin.com/in/victor-collasanta-a4b9a913b/'><div><BsLinkedin /></div> </a>
    
  </div>
);

export default SocialMedia;