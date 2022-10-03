import React from 'react';
import photo from '../images/picture.PNG';
import gitHub from '../styles/icons/gitHub.png';

const About = () => {
  return (
    <div className='body'>
      <div className='About__profile__container'>
        <div className='About__profile__img__container'>
          <img
            src={photo}
            alt='profile picture'
            className='About__profile__img'
          />
        </div>
        <div className='About__profile__info__container'>
          <h1>Noah Zapata Puerta</h1>
          <p className=''>
            I am a visual artist, who has ventured into the field of
            programming. I accepted the challenge of being part of the top Make
            It Real program in version 24, it has been challenging, but I have
            been adding knowledge as a full-stack web developer, among the
            technologies I have learned so far are HTML, CSS, SASS, NodeJs,
            ReactJs, Redux and Express.
          </p>
          <div className='About__profile__aditional'>
            <span>zap.noah@gmail.com</span>
            <a href=''>
              <img
                className='About__profile__icon'
                src={gitHub}
                alt='git'
                style={{ width: '32px', height: '32px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
