import React, { Component , useEffect , useState } from 'react'
import styles from './academia.module.scss'
import Spectral_renderer from './spectral_rederer'
import PhysNCA from './PhysNCA'
import MRViz from './MRViz'
import LogReturn from './LogReturn'

export default function Academia() {

    const [project, setProject] = useState("")

    return (
      <>
      <div className={styles.main}>
        <h1>Academic Track</h1>

        <div className={styles.main_1}>
          <div className={styles.uni}>
            <div>Mst. Cybersecuty</div> <div>EPFL - ETHZ</div> <div>2020 - 2023</div>
            <div>Bch. Computer Science</div> <div>EPFL</div>  <div>2018 - 2020</div>
            <div>Bch. Bioengennering</div> <div>EPFL</div> <div>2016 - 2018</div>
          </div>
          <div className={styles.publications}>
            <h3>Publication</h3>
            <div>
              <div className={styles.title}> Your Email Address Holds the Key: Understanding the Connection Between Email and Password Security with Deep Learning </div>
              <div className={styles.authors}>
                <div> <b>Etienne Salimbeni *</b></div>
                <div>, Nina Mainusch *</div>
                <div>, Dario Pasquini</div>
              </div>
              <div> Deep Learning and Security Workshop ( IEEE S&P ) <a href='https://arxiv.org/abs/2306.08638' target='_blank'>arXiv</a> <a href='https://github.com/spring-epfl/DCM_sp' target='_blank'>repo</a> </div>
            
            </div>
          </div>
        </div>
        
        <h3>Selected Academic Projects</h3>
        <div className={styles.uni_projects}>

          
          <div>
            <div className={styles.project_names}>
              <div onClick={e => {setProject("Thin Film Irredecence")}}>
                  Thin Film Irredecence 
              </div>
              <div onClick={e => {setProject("Physic Sim with NCA")}}>
                  Physic Sim. with NCA 
              </div>
              {
                /*
                  <div onClick={e => {setProject(p => p ="HPC")}}>
                      Efficient MPC
                  </div>
                */
              }
              <div onClick={e => {setProject("MRViz")}}>
                  MRViz
              </div>
              <div onClick={e => {setProject("Log Return")}}>
                  Log Return
              </div>
            </div>
          </div>
          

          <div className={styles.project_CONTENT}>

            {project == ""? "":<></>}
            {project == "Thin Film Irredecence"? <><Spectral_renderer/> </> :<></>}
            {project == "Physic Sim with NCA"? <PhysNCA/>:<></>}
            {project == "HPC"? "HPC ":<></>}
            {project == "MRViz"? <MRViz/>:<></>}
            {project == "Log Return"? <LogReturn/> :<></>}

          </div>
          

        </div>
        
      </div>
      </>)
}