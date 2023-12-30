import React, { Component , useState } from 'react'
import styles from './VolumetricNCA.module.scss'

export default function VolumetricNCA() {

    return (<div className={styles.main}>
    
    <h1>Volumetric Neural Cellular Automata</h1>

    <div className={styles.intro}>

        <div className={styles.intro_text}>
            <p>
                Experiments with 3D Neural Cellular Automata, combined with clip and a differentiable volumetric renderer.
            </p>

            <br/>
            
        </div>

        <div>
            <p>Some examples of generated volumes :</p>
            
            <br/>

            <div className={styles.image}>
                <img src='academia_projects\VolumetricNCA\1.png' />
                <img src='academia_projects\VolumetricNCA\2.png' />
                <img src='academia_projects\VolumetricNCA\3.png' />
                <img src='academia_projects\VolumetricNCA\4.png' />
                <img src='academia_projects\VolumetricNCA\5.png' />
                <img src='academia_projects\VolumetricNCA\6.png' />
                <img src='academia_projects\VolumetricNCA\rabbit.gif' className={styles.imagefw}/>
            </div>

        </div>

       

       
    </div>
    
    
    
    </div>)

}