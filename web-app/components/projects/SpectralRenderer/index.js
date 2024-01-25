import React, { Component , useState } from 'react'
import styles from './spectral_renderer.module.scss'
import Image from 'next/image'

import renderimage from "../../../public/academia_projects/spectral_renderer/spectral_renderer_final.png"

export default function Spectral_renderer() {

    return (<div className={styles.main}>
    
    <h1>Spectral Renderer, EPFL rendering competition</h1>

    <div className={styles.intro}>

        <div className={styles.intro_text}>
            <p>
                A spectral ray-tracer take into account
                the wavelenght for each simulated light ray. This enable more realistic physic based rendering such as
                thin film irredescence (bubble and oil rainbow), temperature color calibration and more complex bsdf such as the one use for the <a href='https://fr.wikipedia.org/wiki/Morpho' target="_blank">Morpho butterfly</a>.  
            </p> 
            <br/>
            <p> Won runner up position !! </p>
            <br/>
            <p> Report: <a href='https://github.com/salimbeni1/spectral_renderer' target="_blank">Spectral Ray Tracer</a></p>
       
        </div>

        <div className={styles.image}>
            <Image

                src={renderimage}
                layout='fill'
                object-fit="contain"
                alt="Picture of the author"
                placeholder='blur'
            />
        </div>

       
    </div>
    
    
    
    </div>)

}