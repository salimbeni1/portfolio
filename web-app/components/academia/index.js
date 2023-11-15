import React, { Component } from 'react'
import styles from './academia.module.scss'

export default class Academia extends Component {
  render() {
    return (
      <>
      <div className={styles.main}>
        <h1>Academic Track</h1>

        <div className={styles.main_1}>
          <div className={styles.uni}>
            <div>Cybersecuty</div> <div>EPFL - ETHZ</div>
            <div>computer science</div> <div>EPFL</div>  
            <div>bioengennering</div> <div>EPFL</div>
          </div>
          <div className={styles.publications}>
            <h3>Publication</h3>
            <div>
              Your email adress holds the key, 
            </div>
          </div>
        </div>
        
        <div className={styles.uni_projects}>

          <h3>Selected Academic Projects</h3>
          <div>
              Thin film irredecence 
          </div>
          <div>
              Physic Sim with NCA 
          </div>
          <div>
              HPC
          </div>
          <div>
              MRViz
          </div>
          <div>
              Log Return
          </div>

        </div>
        
      </div>
      </>)
    }
}