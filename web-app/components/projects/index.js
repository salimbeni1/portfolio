import React, { Component } from 'react'
import styles from './projects.module.scss'

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.main}>

      <h1>Xplore, </h1> <p>Student-led Space Robotics Group from EPFL</p>
      <div className={styles.xplore}>

        <div className={styles.im1}>
          <img src='Xplore/xplore_rover.jpg' height={"100%"}/>
        </div>

        <div className={styles.text}>

          <h2>Navigation Team Lead</h2>

          <p>I had the chance to lead the Navigation team of Xplore (8 pationate researchers !). Our focus was on the development of Perception, Planning and Localization of a rover in a full autonomous navigation framework. </p>
          <p>During that year, together with the team, we :</p>
          <ul>
            <li>Collaborated with <a href='https://www.epfl.ch/labs/vita/' target='_blank'>EPFL VITA lab</a> on LiDAR sensor mapping</li>
            <li>Collaborated with <a href='https://www.maxongroup.ch/' target='_blank'>MAXON</a> on new motor drivers </li>
            <li>Supervised semester project and thesis for Bachelors and Masters </li>
            <li>Won 3rd place at the <a href='https://roverchallenge.eu/en/main-page/' target='_blank'> ERC (European Rover Challenge) </a> !!</li>
          </ul>
            
        </div>
        <div className={styles.im2}>
          <div className={styles.im2_1}>
            <img src='Xplore/xplore_team.jpg' height={"100%"}/>
          </div>
          <div className={styles.im2_2}>
            <div className={styles.im2_2_1}>
              <img src='Xplore/rviz_xplore.png' height={"100%"}/>
            </div>
            <div className={styles.im2_2_2}>
              <img src='Xplore/xplore_rover_2.jpg' height={"100%"}/>
            </div>
          </div>
        </div>

      </div>
      
      <h1>Personal Projects</h1>
      
      <div className={styles.personal}>

        <a href='https://svg-animator.vercel.app/app' target='_blank'>
          <div className={styles.pannel}>
            <h3>
            SVG-Animator
            </h3>
            <p>
              Editor for SVG animations <br/>(1K/Month Users)
            </p>
          </div>
        </a>

        <a href='https://konvertor.vercel.app/' target='_blank'>
          <div className={styles.pannel}>
            <h3>
            Konvertor
            </h3>
            <p>Online conversion from .exr to .mp4</p>
          </div>
        </a>
        

        <div> 

        </div>

        <a href='https://www.koalabo.club/' target='_blank'>
          <div className={styles.pannel}>
            <h3>
            Koalabo
            </h3>
            <p>Middle/High School Website</p>
          </div>
        </a>
        
        <a href='' target='_blank'>
          <div className={styles.pannel}>
            <h3>Volumetric NCA</h3>
            <p>Volumetric Rendering with Neural Cellular Automata</p>
          </div>
        </a>
        

        <div>
          
        </div>

        <a href='rob_UV.jpeg' target='_blank'>
          <div className={styles.pannel}>
            <h3>UV Photography</h3>
            <p>Amateur photography on the UV Spectrum</p>
          </div>
        </a>
        
      </div>
      
      <br/><br/>
      </div>)
    }
}