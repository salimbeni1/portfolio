import React, { Component , useState } from 'react'
import styles from './physnca.module.scss'

export default function PhysNCA() {

    return (<div className={styles.main}>
    
    <h1>Physic simulations with Neural Cellular Automata</h1>

    <div className={styles.intro}>
        <div className={styles.image}>
            <img src='academia_projects\Physics_NCA\big.gif'/>
            <img src='academia_projects\Physics_NCA\big_c.gif'/>
        </div>
        
        <div className={styles.intro_text}>
            <div>

                The idea behind the spectral ray-tracer is to take into account
                the wavelenght for each simulated ray and make each object interaction
                with the ray wavelenght dependent.

            </div>
            
            <div className={styles.intro_text_images}>
                <img src='academia_projects\Physics_NCA\fall.gif'/>
                <img src='academia_projects\Physics_NCA\fall_c.gif'/>
                <img src='academia_projects\Physics_NCA\cube.gif'/>
                <img src='academia_projects\Physics_NCA\cube_c.gif'/>
            </div>
        </div>
    </div>
    
    </div>)
}