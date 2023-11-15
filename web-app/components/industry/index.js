import React, { Component } from 'react'
import styles from './industry.module.scss'

export default class Industry extends Component {
  render() {
    return (
      <>
      <div className={styles.main}>

        <h1>Work Experience</h1>
        <div className={styles.Oracle}>
            <div className={styles.Oracle_1}>
                <div>Oracle</div>
                <h3>Research Assistant</h3>
            </div>

            <div className={styles.Oracle_2}>

                

            </div>

            <div className={styles.Oracle_3}>

                <img src="Oracle.png" alt="Oracle Logo" width="200" height="auto"/>

            </div>
        </div>

        <div className={styles.Armasuisse}>
            <div className={styles.Armasuisse_1}>
                <div>Armasuisse</div>
                <h3>Software engeneer intern</h3>
            </div>
            <div className={styles.Armasuisse_2}></div>
            <div className={styles.Armasuisse_3}>

            <img src="armasuisse.png" alt="Oracle Logo" width="200" height="auto"/>
            </div>
        </div>

        <div className={styles.Niantic}>
            <div className={styles.Niantic_1}>
                <div>Niantic Labs</div>
                <h3>Security engeneer intern</h3>
            </div>
            <div className={styles.Niantic_2}></div>
            <div className={styles.Niantic_3}>
                <img src="Niantic.svg" alt="Oracle Logo" width="200" height="auto"/>
            </div>
        </div>

        <div className={styles.EPFL}>

            <div className={styles.EPFL_1}>
                <div>EPFL</div>
                <h3>Teaching assistant</h3>
            </div>
            <div className={styles.EPFL_2}></div>
            <div className={styles.EPFL_3}>
                <img src="EPFL.png" alt="Oracle Logo" width="100" height="auto"/>
            </div>
        </div>

      </div>   
      </>)
    }
}