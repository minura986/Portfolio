import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        
        {/* 1. Frontend */}
        <div className="skills__content">
          <h3 className="skills__title">Frontend</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxl-react'></i>
                <h3 className="skills__name">React</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-javascript'></i>
                <h3 className="skills__name">JavaScript</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-html5'></i>
                <h3 className="skills__name">HTML5</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-css3'></i>
                <h3 className="skills__name">CSS3</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-tailwind-css'></i>
                <h3 className="skills__name">Tailwind CSS</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-typescript'></i>
                <h3 className="skills__name">TypeScript</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Backend */}
        <div className="skills__content">
          <h3 className="skills__title">Backend</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxl-java'></i>
                <h3 className="skills__name">Java</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-spring-boot'></i>
                <h3 className="skills__name">Spring Boot</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-nodejs'></i>
                <h3 className="skills__name">Node.js</h3>
              </div>

              <div className="skills__data">
                <i className='bx bx-server'></i>
                <h3 className="skills__name">Express.js</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-c-plus-plus'></i>
                <h3 className="skills__name">C++</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-mongodb'></i>
                <h3 className="skills__name">MongoDB</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Tools & Others */}
        <div className="skills__content">
          <h3 className="skills__title">Tools & Others</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxl-git'></i>
                <h3 className="skills__name">Git</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-docker'></i>
                <h3 className="skills__name">Docker</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-aws'></i>
                <h3 className="skills__name">AWS</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-firebase'></i>
                <h3 className="skills__name">Firebase</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxl-figma'></i>
                <h3 className="skills__name">Figma</h3>
              </div>

              <div className="skills__data">
                <i className='bx bxs-palette'></i>
                <h3 className="skills__name">Canva</h3>
              </div>
              
               <div className="skills__data">
                <i className='bx bxl-adobe'></i>
                <h3 className="skills__name">Photoshop</h3>
              </div>

               <div className="skills__data">
                <i className='bx bxs-camera-movie'></i>
                <h3 className="skills__name">After Effects</h3>
              </div>

               <div className="skills__data">
                <i className='bx bxs-video'></i>
                <h3 className="skills__name">Premier Pro</h3>
              </div>

               <div className="skills__data">
                <i className='bx bx-cut'></i>
                <h3 className="skills__name">Capcut</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;