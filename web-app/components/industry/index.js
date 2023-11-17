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
                <div>Oracle Labs</div>
                <h3>Research Assistant</h3>
                <div>Oracle Cloud and AI security Group</div>
            </div>

            <div className={styles.Oracle_2}>
                ML based anomaly detection of database transactions.
               Cross-Compilation of python modules with C++ and java bindings from Linux x86 to MacOs arm64
            </div>

            <div className={styles.Oracle_3}>

                <img src="Oracle.png" alt="Oracle Logo" width="200" height="auto"/>

            </div>
        </div>

        <div className={styles.Armasuisse}>
            <div className={styles.Armasuisse_1}>
                <div>Armasuisse CYD</div>
                <h3>Software engeneer intern</h3>
                <div>Cyber Defence Campus</div>
            </div>
            <div className={styles.Armasuisse_2}>
                Optimize a large scale network flow anomaly detection pipeline to replace Splunk.
                Deployment of deception systems within the network DMZ.
            </div>
            <div className={styles.Armasuisse_3}>

            <img src="armasuisse.png" alt="Oracle Logo" width="200" height="auto"/>
            </div>
        </div>

        <div className={styles.Niantic}>
            <div className={styles.Niantic_1}>
                <div>Niantic Labs</div>
                <h3>Security engeneer intern</h3>
                <div>Niantic Infrastructure Security Group</div>
            </div>
            <div className={styles.Niantic_2}> 
                Automate Google Cloud assets and threats discovery.
                Run security code review on custom authorization
                and authentication services: OAuth2, OpenID
            </div>
            <div className={styles.Niantic_3}>
                <img src="Niantic.svg" alt="Oracle Logo" width="200" height="auto"/>
            </div>
        </div>

        <div className={styles.EPFL}>

            <div className={styles.EPFL_1}>
                <div>EPFL</div>
                <h3>Teaching assistant</h3>
            </div>
            <div className={styles.EPFL_2}>
            Supervising group projects, Q&A sessions, project and exam corrections for different lectures.
            </div>
            <div className={styles.EPFL_3}>
                <img src="EPFL.png" alt="Oracle Logo" width="100" height="auto"/>
            </div>
        </div>

      </div>   
      </>)
    }
}