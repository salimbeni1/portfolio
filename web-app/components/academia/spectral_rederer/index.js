import React, { Component , useState } from 'react'
import styles from './spectral_renderer.module.scss'

export default function Spectral_renderer() {

    return (<div className={styles.main}>
    
    <h1>Spectral Renderer</h1>

    <div className={styles.intro}>

        <div className={styles.image}>
            <img src='academia_projects\spectral_renderer\spectral_renderer_final.png' />
        </div>

        <div className={styles.intro_text}>
            <p>
                The image on the right, is my entry for the competition of the Advanced Compupter Graphic course of Wenzel Jackob at EPFL.
                Where my submission won a runner up position !!  
            </p>

            <p> <a href='https://github.com/salimbeni1/spectral_renderer' target="_blank">Use this link for more details on my submission.</a></p>

            <p>
                For the competion we had to come up with new features for the reay tracer we developped during the course.
                I decided to focus on more realistic and physic based rendering, doing a spectral ray tracer.
            </p>

            <p>
                The idea behind the spectral ray-tracer is to take into account
                the wavelenght for each simulated ray and make each object interaction
                with the ray wavelenght dependent. This enable 
                thin film irredescence (bubble and oil rainbow), temperature color calibration and more complex bsdf such as the one use for the <a href='https://fr.wikipedia.org/wiki/Morpho' target="_blank">Morpho butterfly</a>.  
            </p>
       
        </div>

       
    </div>
    
    
    
    </div>)

}