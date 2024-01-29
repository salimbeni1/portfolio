import styles from '../styles/ProjectsPage.module.scss';
import LogReturn from '../components/projects/LogReturn';
import MRViz from '../components/projects/MRViz';
import PhysNCA from '../components/projects/PhysNCA';
import Spectral_renderer from '../components/projects/SpectralRenderer';
import SVGAnimator from '../components/projects/SVGAnimator';
import VolumetricNCA from '../components/projects/VolumetricNCA';
import Konvertor from '../components/projects/Konvertor';
import Koalabo from '../components/projects/Koalabo';
import UV from '../components/projects/UV';

import dynamic from 'next/dynamic'


const DynamicSHS = dynamic(() => import('../components/projects/SHS'), {
  ssr: false,
})

const DynamicPasswordCracking = dynamic(() => import('../components/projects/PasswordCracking'), {
  ssr: false,
})

const ProjectsPage = ({ projects }) => {


  return (
    <>
      <div className={styles.container}>


        <div className={styles.subCtn}>
          <DynamicPasswordCracking/>
        </div>
       
        <div className={styles.subCtn}>
          <SVGAnimator/>
        </div>

        <div className={styles.subCtn}>
        <MRViz/>
        </div>
        <div className={styles.subCtn}>
        <Spectral_renderer/>
        </div>
        <div className={styles.subCtn}>
        <VolumetricNCA/>
        </div>
        <div className={styles.subCtn}>
        <PhysNCA/>
        </div>
        <div className={styles.subCtn}>
        <LogReturn/>
        </div>
        <div className={styles.subCtn}>
        <Konvertor/>
        </div>

        <div className={styles.subCtn}>
        <Koalabo/>
        </div>

        <div className={styles.subCtn}>
        <UV/>
        </div>

        <div className={styles.subCtn}>
        <DynamicSHS/>
        </div>
                
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
