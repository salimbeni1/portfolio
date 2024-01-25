import React, { Component , useState } from 'react'
import styles from './UV.module.scss'
import Image from 'next/image'
import uv0 from "../../../public/uv/0.jpg"
import uv1 from "../../../public/uv/1.jpg"
import uv2 from "../../../public/uv/2.jpg"
import uv3 from "../../../public/uv/3.jpeg"

export default function UV() {

    return (<div className={styles.main}>

        <h1>Ultra Violet Photography</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> I unmounted my DSLR camera to remove its internal filter and replaced it with a UV one. </p>
            </div>

            <div className={styles.images}>
                <div className={styles.div1}>

                    <Image
                        src={uv3}
                        layout='fill'
                        object-fit="contain"
                        alt="Picture of the author"
                        placeholder='blur'
                        
                    />

                </div>

                <div className={styles.div1}>

                    <Image
                        src={uv0}
                        layout='fill'
                        object-fit="contain"
                        alt="Picture of the author"
                        placeholder='blur'
                    />

                </div>

                <div className={styles.div1}>

                    <Image
                        
                        src={uv1}
                        layout='fill'
                        object-fit="contain"
                        alt="Picture of the author"
                        placeholder='blur'
                    />

                </div>

                <div className={styles.div1}>

                    <Image
                        
                        src={uv2}
                        layout='fill'
                        object-fit="contain"
                        alt="Picture of the author"
                        placeholder='blur'
                    />

                </div>
                
            </div>
             
        </div>

    </div>)
    }