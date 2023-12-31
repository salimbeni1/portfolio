import React, { Component , useState } from 'react'
import styles from './PasswordCracking.module.scss'

export default function PasswordCracking() {

    return (<div className={styles.main}>

        <h1>Password Cracking with Deep Learning</h1>

        <div className={styles.container}>

            <div className={styles.text}>
                    <p>We investigate the effectiveness of deep-learning-based password guessing models for targeted attacks on human-chosen passwords.</p>
                    <br/>
                    <p>Work done with Dario Pasquini and Nina Mainusch, at Prof. Carmela Troncoso Spring Lab, EPFL </p>
                    <br/>
                    <p>Publication at S&P 2023, Workshop on Deep Learning and Security</p>
                    <br/>
                    <p> ArXiv: <a href='https://arxiv.org/abs/2306.08638' target='_blank'>publication</a> </p>
                    <p> Github repo: <a href='https://github.com/spring-epfl/DCM_sp' target='_blank'>DCM_sp</a></p>

            </div>

            <div className={styles.images}>
                <img src='academia_projects\PasswordCracking\1.png'/>
                <img src='academia_projects\PasswordCracking\2.png'/>
                <img src='academia_projects\PasswordCracking\3.png'/>
            </div>
            
        </div>

    </div>)
    }