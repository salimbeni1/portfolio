import React, { useState } from 'react'
import styles from './main.module.scss'
import Intro from '../intro'
import Resume from '../resume';
import Industry from '../industry';
import Academia from '../academia';
import Projects from '../projects';

export default function Main() {

  const [selectedPage, setSelectedPage] = useState("Intro");
  
  return (
      <>
      <div className={styles.container}>
        <div className={styles.header}>
              <div className={styles.pad}>
              </div>

              <div className={styles.afterPad}>
                  <div className={styles.ball_yellow}></div>
                  <div className={styles.options}>
                    <div onClick={ e => {setSelectedPage("Intro")}} >E.S.</div>
                    <div onClick={ e => {setSelectedPage("Resume")}} >Resume</div>
                    <div onClick={ e => {setSelectedPage("Industry")}} >Industry</div>
                    <div onClick={ e => {setSelectedPage("Academia")}} >Academia</div>
                    <div onClick={ e => {setSelectedPage("Projects")}} >Projects</div>
                  </div>
                  <div className={styles.ball_orange}></div>
              </div>
        </div>
        <div className={styles.header2}>
            <div className={styles.sec1}>
              <div className={styles.sec1_1}></div>
              <div className={styles.sec1_2}>
                <div className={styles.sec1_2_1}></div>  
                <div className={styles.sec1_2_2}></div>  
              </div>  
            </div>
            <div className={styles.sec2}>
              <div className={styles.sec2_1}>
                <div className={styles.sec2_1_1}></div>
                <div className={styles.sec2_1_2}></div>
              </div>  
              <div className={styles.sec2_2}>
                <div className={styles.sec2_2_1}></div>
                <div className={styles.sec2_2_2}></div>
              </div>  
            </div>
            <div className={styles.sec3}>
              <div className={styles.sec3_1}></div>  
              <div className={styles.sec3_2}></div>
              <div className={styles.sec3_ball}></div>
            </div>
        </div>
        <div className={styles.body}>
          {selectedPage == "Intro" ? <Intro/> : <></> }
          {selectedPage == "Resume" ? <Resume/> : <></> }
          {selectedPage == "Industry" ? <Industry/> : <></> }
          {selectedPage == "Academia" ? <Academia/> : <></> }
          {selectedPage == "Projects" ? <Projects/> : <></> }
        </div>
      </div>
      </>
    )
  
}
