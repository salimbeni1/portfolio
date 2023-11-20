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
                <ul>
                    <li>Thesis on ML uncertainty and security</li>
                    <li>LLM based agent for text to api</li>
                    <li>ML based anomaly detection of oracle db servers</li>
                    <li>Cross-Compilation of python modules with C++ and java bindings from Linux x86 to MacOs arm64</li>
                </ul>
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
                <ul>
                    <li>Deploy and mantain a large scale network flow anomaly detection infrastructure to replace Splunk. (Kafka, Spark, Kubernetes, KubeFlow, ...)</li>
                    <li>Deploy, harden and monitor deception systems traps for the network DMZ.</li>
                </ul>
                
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
                <ul>
                    <li>Automate Google Cloud assets and threats discovery</li>
                    <li>Run security code review on custom authorization and authentication services: OAuth2, OpenID</li>
                </ul>
                
                
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