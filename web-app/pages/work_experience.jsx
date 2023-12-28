import styles from '../styles/ProjectsPage.module.css';


const WorkExperiencePage = ({ projects }) => {
  return (
    <>
      <h3>Work Experience</h3>

      <div className={styles.container}>
        
        <h1>Oracle</h1>
        <h3>Research Assistant</h3>
        <div>Oracle Cloud and AI security Group</div>
        <ul>
            <li>Thesis on ML uncertainty and security</li>
            <li>LLM based agent for text to api</li>
            <li>ML based anomaly detection of oracle db servers</li>
            <li>Cross-Compilation of python modules with C++ and java bindings from Linux x86 to MacOs arm64</li>
        </ul>
        <img src="Oracle.png" alt="Oracle Logo" width="200" height="auto"/>

        <h1>Armasuisse CYD</h1>
        <h3>Software Engineer Intern</h3>
        <div>Cyber Defence Campus</div>
        <ul>
            <li>Deploy and mantain a large scale network flow anomaly detection infrastructure to replace Splunk. (Kafka, Spark, Kubernetes, KubeFlow, ...)</li>
            <li>Deploy, harden and monitor deception systems traps for the network DMZ.</li>
        </ul>
        <img src="armasuisse.png" alt="armasuisse Logo" width="200" height="auto"/>


        <h1>Niantic</h1>
        <h3>Security Engineer Intern</h3>
        <div>Niantic Infrastructure Security Group</div>
        <ul>
            <li>Automate Google Cloud assets and threats discovery</li>
            <li>Run security code review on custom authorization and authentication services: OAuth2, OpenID</li>
        </ul>
        <img src="Niantic.svg" alt="Niantic Logo" width="200" height="auto"/>

        <h3>University</h3>

        <h1>Xplore</h1>

        <p>Student-led Space Robotics Group from EPFL</p>
        <div className={styles.xplore}>

          <div className={styles.im1}>
            <img src='Xplore/xplore_rover.jpg' height={"200px"}/>
          </div>

          <div className={styles.text}>

            <h2>Navigation Team Lead</h2>

            <p>I had the chance to lead the Navigation team of Xplore (8 pationate researchers !). Our focus was on the development of Perception, Planning and Localization of a rover in a full autonomous navigation framework. </p>
            <p>During that year, together with the team, we :</p>
            <ul>
              <li>Collaborated with <a href='https://www.epfl.ch/labs/vita/' target='_blank'>EPFL VITA lab</a> on LiDAR sensor mapping</li>
              <li>Collaborated with <a href='https://www.maxongroup.ch/' target='_blank'>MAXON</a> on new motor drivers </li>
              <li>Supervised semester project and thesis for Bachelors and Masters </li>
              <li>Won 3rd place at the <a href='https://roverchallenge.eu/en/main-page/' target='_blank'> ERC (European Rover Challenge) </a> !!</li>
            </ul>
              
          </div>
          <div className={styles.im2}>
            <div className={styles.im2_1}>
              <img src='Xplore/xplore_team.jpg' height={"200px"}/>
            </div>
            <div className={styles.im2_2}>
              <div className={styles.im2_2_1}>
                <img src='Xplore/rviz_xplore.png' height={"200px"}/>
              </div>
              <div className={styles.im2_2_2}>
                <img src='Xplore/xplore_rover_2.jpg' height={"200px"}/>
              </div>
            </div>
          </div>

        </div>

        <h1>EPFL</h1>
        Supervising group projects, Q&A sessions, project and exam corrections for different lectures.
        <img src="EPFL.png" alt="EPFL Logo" width="100" height="auto"/>
        
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
