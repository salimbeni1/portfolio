import React, { Component , useState } from 'react'
import styles from './logreturn.module.scss'

export default function LogReturn() {

    return (<div className={styles.main}>

        <h1>Log Return</h1>

        <div className={styles.container}>
            <div className={styles.images}>
                <img src='academia_projects\LogReturn\gif.gif'/>
            </div>
            <div className={styles.text}>
                    <p>We use the minimum spanning tree (MST) to compress the fully connected graph of all possible corrolations of markets. MST show to be an efficient algorithm to get an estimation of the dominant dependence dynamics of the market. </p>
                    <br/>
                    <p>Work done under the supervision of <a href='https://www.linkedin.com/in/damien-challet-5636845/?originalSubdomain=fr'>Prof. Challet Damien</a></p>
                    <br/>
                    <p> Website: <a href='https://log-returns.vercel.app/' target='_blank'>log-returns.vercel.app</a> </p>
                    <p> Github repo: <a href='https://github.com/salimbeni1/log_returns' target='_blank'>log_returns</a></p>

            </div>
        </div>

    </div>)
    }