import React, { Component , useState } from 'react'
import styles from './Koalabo.module.scss'

export default function Koalabo() {

    return (<div className={styles.main}>

        <h1>Koalabo</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> High School Website for my mum, who is a Math and Science teacher. </p>
                    <br/>
                    <p> Website: <a href='https://www.koalabo.club/' target='_blank'>www.koalabo.club</a> </p>

            </div>

            
        </div>

    </div>)
    }