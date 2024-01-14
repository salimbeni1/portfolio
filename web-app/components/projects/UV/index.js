import React, { Component , useState } from 'react'
import styles from './UV.module.scss'

export default function UV() {

    return (<div className={styles.main}>

        <h1>Ultra Violet Photography</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> I unmounted my DSLR camera to remove its internal filter and replaced it with a UV one. </p>
            </div>

            <div className={styles.images}>
                <img src='uv/3.jpeg'/>
                <img src='uv/0.jpg'/>
                <img src='uv/1.jpg'/>
                <img src='uv/2.jpg'/>
            </div>
             
        </div>

    </div>)
    }