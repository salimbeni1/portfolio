import React, { Component } from 'react'
import styles from './main.module.scss'

export default class Main extends Component {
  render() {
    return (
      <>

      <div className={styles.container}>
        <div className={styles.header}>
              <div className={styles.pad}>
              </div>

              <div className={styles.afterPad}>
                  <div className={styles.ball_yellow}></div>
                  <div className={styles.options}>
                    <div>Etienne Salimbeni</div>
                    <div>Resume</div>
                    <div>Publications</div>
                    <div>Projects</div>
                  </div>
                  <div className={styles.ball_orange}></div>
              </div>
        </div>
        <div className={styles.header2}>

            <div className={styles.sec1}> </div>
            <div className={styles.sec2}> </div>
            <div className={styles.sec3}> </div>



        </div>
        <div className={styles.body}>
            <div className={styles.body_header}>
              <div className={styles.profile}>
                <div className={styles.title}>
                  <div>Etienne</div>
                  <div>Salimbeni</div>
                </div>
                
                <div className={styles.img}>
                </div>
              </div>
              <div className={styles.text}>
                <div>
                <p>
                  Hi, I’m Etienne Salimbeni. I am a Master student doing a joint degree at the EPFL Lausanne and ETHZ Zurich.
                  <br/>I am fortunate to be completing my thesis advised by Francesco Craighero and Pierre Vandergheynst. 
                  <br/>I completed a semester project under Dario Pasquini and Carmela Troncoso.
                </p>  
                  Prior to that, I was an Intern at Oracle Research, at the cyberdefence group of the Swiss confederation (Armasuisse/CYD) and at Niantic Labs.
                  <br/>
                  My research interests broadly include security and interpretability of machine learning systems and computer graphics.
                  <br/>I am particularity excited about uncertainty estimations of large models, visualizations of model behaviour, data-centric security and ... artifical life.
                <p> 
                  You can find more about my recent projects both academic and personal.
                </p>
                </div>
              </div>
            </div>

            <div className={styles.body_body}>

            </div>
        </div>
      </div>
        
      </>
    )
  }
}
