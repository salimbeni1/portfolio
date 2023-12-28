import styles from '../styles/ProjectsPage.module.css';
import LogReturn from '../components/projects/LogReturn';
import MRViz from '../components/projects/MRViz';
import PhysNCA from '../components/projects/PhysNCA';
import Spectral_renderer from '../components/projects/SpectralRenderer';
import SVGAnimator from '../components/projects/SVGAnimator';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Some fun project I have been working on</h3>

      <div className={styles.container}>
        
        <LogReturn/>
        <MRViz/>
        <PhysNCA/>
        <Spectral_renderer/>
        <SVGAnimator/>

        <h1>Koalabo</h1>
        <h1>UV photography</h1>
        <h1>Konvertor</h1>
        <h1>Volumetric NCA</h1>

        <h1>Xplore</h1>
        
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
