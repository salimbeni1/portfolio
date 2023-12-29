import styles from '../styles/work_experiencePage.module.scss';


const WorkExperiencePage = ({ projects }) => {
  return (
    <>
      <h3>Work Experience</h3>
      <div className={styles.container}>
        
        <div className={styles.inlineFlex}>
          <img src="Oracle.png" alt="Oracle Logo" width="200" height="auto"/>
          <h3>Research Assistant</h3>
          <h4> Feb. 2023 - Present </h4>
        </div>
        <div>Cloud and AI Security Research Group</div>
        <ul style={{paddingLeft:"15px"}}>
            <li>Thesis on ML uncertainty and security</li>
            <li>LLM based agent for text to api</li>
            <li>ML based anomaly detection of oracle db servers</li>
            <li>Cross-Compilation of python modules with C++ and java bindings from Linux x86 to MacOs arm64</li>
        </ul>
        
        <div className={styles.inlineFlex}>
          <img src="Coat_of_Arms_of_Switzerland.svg" alt="armasuisse Logo" width="50" height="auto"/>
          <h1>Armasuisse</h1>
          <h3>Software Engineer Intern</h3>
          <h4> Sept. 2022 - Jan. 2023 </h4>
        </div>
        <div>Cyber Defence Campus, CYD</div>
        <ul style={{paddingLeft:"15px"}}>
            <li>Deploy and mantain a large scale network flow anomaly detection infrastructure to replace Splunk. (Kafka, Spark, Kubernetes, KubeFlow, ...)</li>
            <li>Deploy, harden and monitor deception systems traps for the network DMZ.</li>
        </ul>

        <div className={styles.inlineFlex}>
          <img src="niantic_orange_logo.png" alt="Niantic Logo" width="100" height="auto"/>
          <h3>Security Engineer Intern</h3>  
          <h4> Apr. 2022 - Sept. 2022 </h4>
        </div>
        <div>Niantic Infrastructure Security Group</div>
        <ul style={{paddingLeft:"15px"}}>
            <li>Automate Google Cloud assets and threats discovery</li>
            <li>Run security code review on custom authorization and authentication services: OAuth2, OpenID</li>
        </ul>


        <br/><br/><br/>
        
        <h3>University</h3>

        <div className={styles.inlineFlex}>
          <h1>Xplore</h1>
          <p>Student-led Space Robotics Group from EPFL</p>
        </div>
        
        <div className={styles.xplore}>
          <div className={styles.text}>
            <h2>Navigation Team Lead</h2>
            <br/>
            <p>I had the chance to lead the Navigation team of Xplore (8 pationate researchers !). Our focus was on the development of Perception, Planning and Localization of a rover in a full autonomous navigation framework. </p>
            <p>During that year, together with the team, we :</p>
            <ul>
              <li>Collaborated with <a href='https://www.epfl.ch/labs/vita/' target='_blank'>EPFL VITA lab</a> on LiDAR sensor mapping</li>
              <li>Collaborated with <a href='https://www.maxongroup.ch/' target='_blank'>MAXON</a> on new motor drivers </li>
              <li>Supervised semester project and thesis for Bachelors and Masters </li>
              <li>Won 3rd place at the <a href='https://roverchallenge.eu/en/main-page/' target='_blank'> ERC (European Rover Challenge) </a> !!</li>
            </ul>
          </div>
          <br/>
          <div className={styles.inlineFlex}>
            <img src='Xplore/xplore_rover.jpg' height={"200px"}/>
            <img src='Xplore/xplore_team.jpg' height={"200px"}/>
            <img src='Xplore/xplore_rover_2.jpg' height={"200px"}/>
          </div>
        </div>


        <div className={styles.inlineFlex}>
          <img src="EPFL.png" alt="EPFL Logo" width="100" height="auto"/>
          <h2>Teaching Assitant</h2>
        </div>
        Supervising group projects, Q&A sessions, project and exam corrections for different lectures.    
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Work Experience' },
  };
}

export default WorkExperiencePage;
