import React, { Component } from 'react'
import styles from './projects.module.scss'

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.main}>

      <h1>Xplore</h1>
      <div className={styles.xplore}>

        <div className={styles.im1}>
          <img src='Xplore/xplore_rover.jpg' height={"100%"}/>
        </div>

        <div className={styles.text}>

          <h2>Navigation Team Lead</h2>
          <p>Xplore is an EPFL student association that link academia, industry and governmental agencies around Space Rover Technologies. </p>
          <p>I had the chance to lead the Navigation team of Xplore. Our focus was on the development of Perception, Planning and Localization of a rover in a full autonomous navigation framework  </p>

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
        <div className={styles.svg_animator}>
          SVG-Animator
        </div>

        <div>
          Konvertor
        </div>

        <div> </div>

        <div>
          Koalabo
        </div>

        <div>
          Volumetric NCA
        </div>

        <div>
          
        </div>

        <div>
          UV Photography
        </div>
      </div>
      
      <br/><br/>
      </div>)
    }
}