'use client';

import React, { Component , useState } from 'react'
import styles from './SHS.module.scss'
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function SHS() {

    return (<div className={styles.main}>

        <h1>Graphic Design</h1>

        <div className={styles.container}>
            <div className={styles.text}>
                    <p> Some posters I did for the graphic design courses at ECAL. </p>
            </div>


            <div className={styles.pdfs}>
                <div>
                    <Document file="SHS\Affiche IVREA_compressed.pdf" >
                        <Page pageNumber={2} width={200} canvasBackground="transparent" renderTextLayer={false}/>
                    </Document>
                </div>
                
                <div>
                    <Document file="SHS\Affiche IVREA_compressed.pdf" >
                        <Page pageNumber={1} width={200} canvasBackground="transparent" renderTextLayer={false}/>
                    </Document>
                </div>

                <div>
                    <Document file="SHS\gym_compressed.pdf" >
                        <Page pageNumber={1} width={200} canvasBackground="transparent" renderTextLayer={false}/>
                    </Document>
                </div>

                <div>
                    <Document file="SHS\telefone_compressed.pdf" >
                        <Page pageNumber={1} width={200} canvasBackground="transparent" renderTextLayer={false} />
                    </Document>
                </div>
            </div>
            

            
        </div>

    </div>)
    }