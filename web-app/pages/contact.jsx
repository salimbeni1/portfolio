import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>

      <div className={styles.clustermaps}>
        <a href="https://clustrmaps.com/site/1by5v" title="Visit tracker">
          <img src="//www.clustrmaps.com/map_v2.png?d=_DpzN4jsym39EjKuInOrNcu-fQx1Sh7WYuds9G9BdCw&cl=ffffff"/>
        </a>  
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
