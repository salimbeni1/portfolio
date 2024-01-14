import styles from '../styles/ProjectsPage.module.css';
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
      <h3>Some fun project I have been working on 🔥🔥🔥 </h3>

      <div className={styles.container}>


        <DynamicPasswordCracking/>
        
        <SVGAnimator/>

        <MRViz/>
        
        <Spectral_renderer/>
        <VolumetricNCA/>
        <PhysNCA/>
        
        <LogReturn/>
        <Konvertor/>
        
        <Koalabo/>

        <UV/>

        <DynamicSHS/>
        
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
