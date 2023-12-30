import React, { Component , useState } from 'react'
import styles from './svganimator.module.scss'


export default function SVGAnimator() {

    return (<div className={styles.main}>
    
    <h1>SVG Animation Tool</h1>

    <div className={styles.intro}>

        <div className={styles.image}>
            <img src='/svg_animator_gif.gif' />
        </div>

        <div className={styles.intro_text}>
            <p>
                Online editor tool to create SVG animations. 
            </p>
            <br/>
            <p>
                Around 1K mountly active users.
            </p>

            <br/>
            <p> Website: <a href='https://svg-animator.vercel.app' target="_blank">svg-animator.vercel.app</a> </p>
        </div>

       
    </div>
    
    
    
    </div>)

}