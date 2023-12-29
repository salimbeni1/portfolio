import React, { Component , useState } from 'react'
import styles from './Konvertor.module.scss'

export default function Konvertor() {

    return (<div className={styles.main}>

        <h1>Konvertor</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> Online tool to convert sequences of .EXR images to .mp4. Uses FFMPEG and WebAssembly. </p>
                    <br/>
                    <p> Website: <a href='https://konvertor.vercel.app/' target='_blank'>konvertor.vercel.app</a> </p>
                    <p> Github repo: <a href='https://github.com/salimbeni1/konvertor' target='_blank'>konvertor</a></p>

            </div>
        </div>

    </div>)
    }