import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>CODING</h1>
          <h1>IS COOL</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Etienne Salimbeni</h1>
            <h6 className={styles.bio}>
              Warning : Website in construction ...
            </h6>


            <Link href="/projects">
              <button className={styles.button}>Project</button>
            </Link>
            <Link href="/work_experience">
              <button className={styles.outlined}>Resume</button>
            </Link>


          </div>
          {
            /*
            <Illustration className={styles.illustration} />
            */
          }

        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
