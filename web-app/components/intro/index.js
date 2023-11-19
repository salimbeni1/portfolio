import React, { Component } from 'react'
import styles from './intro.module.scss'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default class Intro extends Component {
  render() {
    return (
      <>
      <div>
            <div className={styles.body_header}>
              <div className={styles.profile}>
                <div className={styles.title}>
                  <div>Etienne</div>
                  <div>Salimbeni</div>
                </div>
                
                <div className={styles.img}>
                </div>

                <div className={styles.icons}>
                  <a href="https://www.linkedin.com/in/salimbeni1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin  />
                  </a>
                  <a href="https://scholar.google.com/citations?user=F21GpVwAAAAJ&hl=fr&oi=sra" target="_blank" rel="noopener noreferrer">
                    <SiGooglescholar />
                  </a>
                  <a href="https://github.com/salimbeni1" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>

                  <MdEmail/>
                  
                </div>

              </div>
              <div className={styles.text}>
                <div>
                <p>
                  Hi there! I m Etienne Salimbeni, currently pursuing a joint Master s degree at EPFL Lausanne and ETHZ Zurich. 
                </p>
                <p> 
                  I m working on my thesis with guidance from Francesco Craighero and Pierre Vandergheynst, and I ve also completed a project with Dario Pasquini and Carmela Troncoso.
                </p>
                <p>
                  Before this, I interned at Oracle Research, with the Swiss confederation s cyberdefense group (Armasuisse/CYD), and at Niantic Labs. My main interests are in making machine learning systems in security and computer graphics easier to understand and use. I m really into figuring out how big models make decisions, showing how these models work in a visual way, focusing on security that centers around data, and exploring the concept of artificial life.
                </p>
                <p>
                  Check out my website to see more about what I ve done, both in my studies and my own projects!
                </p>
                </div>
              </div>
            </div>
            <div className={styles.body_body}>

            </div>
      </div>
      </>
      )
    }
}