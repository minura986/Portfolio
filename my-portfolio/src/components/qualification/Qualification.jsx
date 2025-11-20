// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; 
import './qualification.css';

const Qualification = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Educational Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 1. BSc (Hons) */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">BSc (Hons) Software Engineering</h3>
                <span className="qualification__subtitle">Cardiff Metropolitan University (ICBT)</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 05/2025 - Present
                </div>
              </div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* 2. Higher Diploma */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title">Higher Diploma in Computing</h3>
                <span className="qualification__subtitle">Cardiff Metropolitan University (ICBT)</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 4/2023 - 9/2024
                </div>
              </div>
            </motion.div>

            {/* 3. Diploma in Multimedia */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Diploma in Multimedia</h3>
                <span className="qualification__subtitle">Esoft Metro Campus, Galle</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2/2020
                </div>
              </div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* 4. Certificate in Computer Science */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title">Certificate in Computer Science</h3>
                <span className="qualification__subtitle">NIBM, Galle</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2/2016 - 7/2016
                </div>
              </div>
            </motion.div>

            {/* 5. Diploma in ICT */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Diploma in ICT</h3>
                <span className="qualification__subtitle">ICBT Campus, Galle</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 3/2016
                </div>
                <span className="qualification__subtitle" style={{fontSize: '0.75rem', marginTop: '0.5rem'}}>Distinction</span>
              </div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* 6. Ordinary Level */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>
              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title">G.C.E. Ordinary Level</h3>
                <span className="qualification__subtitle">Richmond College, Galle</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;