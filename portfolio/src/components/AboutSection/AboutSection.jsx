import React from 'react';
import aboutLeoPhoto from '../../assets/about-leo.jpg';
import { RiseOutlined, BookOutlined } from '@ant-design/icons';
import './aboutSectionStyles.css';

function AboutSection({ handleArrowClick, arrowIcon }) {

  return (
    <section id="about">
      <div className='about-main-text'>
        <p className='about_p1'>Get To Know More</p>
        <h1 className='title__about'>About Me</h1>
      </div>
      <div className='about-section-flex-container'>
        <div className='about-img-container'>
          <img
            src={aboutLeoPhoto}
            alt='Leonardo`s photo'
            className='about-img'
          />
        </div>

        <div className='about-details-container'>
          <div className='details-container'>
            <div className='experience-container'>
              <RiseOutlined className='experience-icon' />
              <h3 className='experience_title'>Experience</h3>
              <p>1+ years <br /> Frontend Development</p>
              <p>1+ years <br /> Java Development</p>
              <p>6 months <br /> QA</p>
            </div>
            <div className='education-container'>
              <BookOutlined className='education-icon' />
              <h3 className='education_title'>Education</h3>
              <p> Bachelor of Humanities <br /> La Salle College</p>
              <p> Student of Engineering. of systems <br /> U.M.S.S </p>
            </div>
          </div>
          <div className='about_p2'>
            <p>
              Student in the last semester of the degree
              Systems Engineering, focused on
              Web programming. With more
              knowledge in front-end development.
              My experience has developed
              through academic projects and
              personal, which has strengthened my
              problem solving skills
              and teamwork, even under
              pressure. In addition, I have skills of
              leadership and initiative that allow me
              guide and motivate teams towards achievement
              of common objectives.
            </p>
          </div>
        </div>
        <img
          className='arrow-icon'
          src={arrowIcon}
          alt='arrow icon'
          onClick={() => handleArrowClick("experience")}
        />
      </div>

    </section>
  )
}

export default AboutSection;