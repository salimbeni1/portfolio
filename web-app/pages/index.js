import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Main from '../components/main'

export default function Home() {
  return (
    <>


      <div className={styles.mainBody}>

        <div className={styles.column_l}>
            <div className={styles.red} ></div>
            <div className={styles.yellow}></div>
            <div className={styles.red}></div>
        </div>
        
        <div>
          <Main />
        </div>
        
        <div className={styles.column_r}>
          <div className={styles.red}></div>
          <div className={styles.yellow}></div>
          <div className={styles.blue}></div>
        </div>

      </div>
      

      

    </>
  )
}
