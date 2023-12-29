import React, { Component , useState } from 'react'
import styles from './physnca.module.scss'

export default function PhysNCA() {

    return (<div className={styles.main}>
    
    <h1>Physic Simulations with Neural Cellular Automata</h1>

    <div className={styles.intro}>
        <div className={styles.image}>
            <img src='academia_projects\Physics_NCA\description.png'/>

            <div className={styles.intro_text_images}>
                <img src='academia_projects\Physics_NCA\fall.gif'/>
                <img src='academia_projects\Physics_NCA\fall_c.gif'/>

                <img src='academia_projects\Physics_NCA\big.gif'/>
                <img src='academia_projects\Physics_NCA\big_c.gif'/>

                <img src='academia_projects\Physics_NCA\cube.gif'/>
                <img src='academia_projects\Physics_NCA\cube_c.gif'/>

            </div>
        </div>
        
        <div className={styles.intro_text}>
            <div>
                <p>
                    <a href='https://distill.pub/2020/growing-ca/' target="_blank" >Neural Cellular Automata</a> (NCA), is a differentiable view of <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' target="_blank">Conway s Game of life</a>.
                    Despite the fact that NCA models are small, they show the ability to solve complex problems, such as image generation and <a href='https://distill.pub/2020/selforg/mnist/' target="_blank">classification</a>.
                </p>

                <br/>

                <p>
                    In this project we show that with just local message passing, complex physic simulations rules can be learned by a NCA !!
                    We show this for different fluid simulations, and for rigid body interactions.
                </p>

                <br/>

                <p>
                    Collaboration with <a href='https://www.andrinrehmann.ch/' target="_blank">Andrin Rehmann</a>, work presented at the Physic Simulation lecture at ETHZ. </p>

                <br/> 
                <p> Slides: <a href='academia_projects\Physics_NCA\dlca.pdf' target="_blank">Presentation .pdf</a> </p>  
            </div>
            
            
        </div>
    </div>
    
    </div>)
}