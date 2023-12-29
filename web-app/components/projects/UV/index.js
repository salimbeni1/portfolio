import React, { Component , useState } from 'react'
import styles from './UV.module.scss'

export default function UV() {

    return (<div className={styles.main}>

        <h1>Ultra Violet Photography</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> I unmounted my DSLR camera to remove its internal filter and replaced it with a UV one. </p>
            </div>


            <img src='rob_UV.jpeg'/>

            
        </div>

    </div>)
    }