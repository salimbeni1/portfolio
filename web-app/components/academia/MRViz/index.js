import React, { Component , useState } from 'react'
import styles from './mrviz.module.scss'

export default function MRViz() {

    return (<div className={styles.main}>

        <h1>Mixed Reality Toolkit for Robot visualization</h1>

        <div className={styles.container}>

            <div> 
                <video controls="controls" src='academia_projects\MRViz\video.mp4'/>
            </div>
            <div className={styles.text}>
                <p>Collaboration with <a href='https://www.microsoft.com/en-us/research/lab/mixed-reality-ai-zurich/' target='_blank'>Microsoft Mixed Reality Labs</a>, Zurich.</p>
                <p>The goal of the project is to allow the Hololen headset to support RViz visualisations of a real time sensor on a robot. The challenging part is the sensor fusion mapping on the hololen headset.</p>
                <p>For EPFL s data visaulisation course, I was looking for concrete project to work on with my team. After reaching out to multiple companies, we found a good match with Microsoft, for their interest in robotics, mixed reality and data visualization. </p>    
                <p>Link to <a href='https://github.com/salimbeni1/MRViz' target='_blank' >project repo</a> and <a href='https://mrviz.vercel.app/' target='_blank'>presentation</a></p>
            </div>
            
        </div>

    </div>)
    }