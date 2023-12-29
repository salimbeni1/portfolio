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


const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Some fun project I have been working on 🔥🔥🔥 </h3>

      <div className={styles.container}>
        
        <SVGAnimator/>

        <MRViz/>
        
        <Spectral_renderer/>
        <PhysNCA/>
        <VolumetricNCA/>
        
        <LogReturn/>
        <Konvertor/>
        
        <Koalabo/>

        <UV/>
        
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
