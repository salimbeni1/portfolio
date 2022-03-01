import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div style={{margin:"0px 20px"}}>


      <div className={styles.frontHeader}>

        <div className={styles.title}>
          <h1 className={styles.title1}> FULL STACK <br/> DEVELOPER</h1>
          <h1 className={styles.title2}> ETIENNE SALIMBENI</h1>
        </div>
        
      </div>

      <div className={styles.directoriesHeader}>

        <div className={styles.option}>Projects</div>
        <div className={styles.option}>Skills Set</div>
        <div className={styles.option}>About Me</div>

      </div>
     



      

    </div>
  )
}
