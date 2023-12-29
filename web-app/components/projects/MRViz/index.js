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
                <p> Hololen headset application to visualize sensors and maps in real time mapped to the real world on the robot. </p>
                
                <br/>
                <p> Focus on RViz compatible visualisations, such as IMU, LiDar point clouds and heatmaps. </p>    
                
                <br/>
                <p>Collaboration with <a href='https://www.microsoft.com/en-us/research/lab/mixed-reality-ai-zurich/' target='_blank'>Microsoft MR Labs</a>, Zurich.</p>
                <br/>
                <p> Github repo: <a href='https://github.com/salimbeni1/MRViz' target='_blank' >MRViz</a> </p>
                <p> Website: <a href='https://mrviz.vercel.app/' target='_blank'>mrviz.vercel.app</a> </p>
            
            </div>
            
        </div>

    </div>)
    }