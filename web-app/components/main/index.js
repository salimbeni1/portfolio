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
            
        </div>
      </div>
        
      </>
    )
  }
}
