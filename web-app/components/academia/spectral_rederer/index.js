import React, { Component , useState } from 'react'
import styles from './spectral_renderer.module.scss'

export default function Spectral_renderer() {

    return (<div className={styles.main}>
    
    <h1>Spectral Renderer</h1>

    <div className={styles.intro}>
        <div className={styles.intro_text}>
        The idea behind the spectral ray-tracer is to take into account
        the wavelenght for each simulated ray and make each object interaction
        with the ray wavelenght dependent.
        </div>

        <div className={styles.image}>
            <img src='academia_projects\spectral_renderer\spectral_renderer_final.png' />
        </div>
    </div>
    
    
    
    </div>)

}