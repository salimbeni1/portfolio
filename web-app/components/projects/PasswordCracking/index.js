'use client';
import React, { Component , useState } from 'react'
import styles from './PasswordCracking.module.scss'
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PasswordCracking() {

    const [loading, setLoading] = useState(true);
    const onDocumentLoadSuccess = () => {
        setLoading(false);
    };

    return (<div className={styles.main}>
        <h1>Password Cracking with Deep Learning</h1>
        <div className={styles.container}>

            <div className={styles.text}>
                    <p>Expose vulnerable password authentication systems to targeted user attacks with deep learning.</p>
                    <br/>
                    <p>Work done at Spring Lab, EPFL. </p>
                    <br/>
                    <p>Publication at S&P 2023, Workshop on Deep Learning and Security</p>
                    <br/>
                    <p> ArXiv: <a href='https://arxiv.org/abs/2306.08638' target='_blank'>publication</a> </p>
                    <p> Github repo: <a href='https://github.com/spring-epfl/DCM_sp' target='_blank'>DCM_sp</a></p>
            </div>
            
            <div className={styles.images}>
                <Document file="dlsp2023.pdf"  loading={
                    <div className={styles.loadingPlaceholder}>
                    <div className={styles.page_loading}></div>
                    <div className={styles.page_loading}></div>
                    <div className={styles.page_loading}></div>
                    </div>
                } >           
                            <div className={styles.filesCtn}>
                                <Page pageNumber={1} width={200} renderAnnotationLayer={false} renderTextLayer={false}/>
                                <Page pageNumber={2} width={200}  renderAnnotationLayer={false}  renderTextLayer={false}/>
                                <Page pageNumber={3} width={200}  renderAnnotationLayer={false}  renderTextLayer={false}/>
                            </div>
                        
                </Document>
            </div>  
        </div>
    </div>)
    }