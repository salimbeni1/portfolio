import React, { Component , useState } from 'react'
import styles from './logreturn.module.scss'

export default function LogReturn() {

    return (<div className={styles.main}>

        <h1>Log Return</h1>

        <div className={styles.container}>
            <div className={styles.images}>
                <img src='academia_projects\LogReturn\plot1.png'/>
            </div>
            <div className={styles.text}>

                    <p>Work done under the supervision of <a href='https://www.linkedin.com/in/damien-challet-5636845/?originalSubdomain=fr'>Prof. Challet Damien</a></p>
                    <p>We explore ways to visualize correlation between stock prices. Show how dependencies in industry sectors evolve.</p>
                    <p>We use the minimum spanning tree (MST) to compress the fully connected graph of all possible corrolations of markets. MST show to be an efficient algorithm to get an estimation of the dominant dependence dynamics of the market. </p>
                    <p>Link to <a href='https://log-returns.vercel.app/' target='_blank'>website</a> and <a href='https://github.com/salimbeni1/log_returns' target='_blank'>github repo</a></p>

            </div>
            <div className={styles.images} >
                <img src='academia_projects\LogReturn\plot2.png' style={{borderRight:"0px"}}/>
            </div>
        </div>

    </div>)
    }