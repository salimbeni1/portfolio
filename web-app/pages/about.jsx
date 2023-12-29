const AboutPage = () => {
  return (
    <>
      <p>
        Hello! My name is Etienne Salimbeni. I am currently pursuing a joint Master's degree in Computer Science, a collaborative program between EPFL Lausanne and ETH Zurich.
      </p>
      <br/>
      <p>
        I gained diverse experience in ML and Security through internships at Oracle Research, at the Swiss Confederation's cyberdefense department (Armasuisse/CYD) and at Niantic Labs. 
      </p>

      <br/>
      <h1>Academic Track</h1>

      <div >
        <div style={{display:"grid" , gridTemplateColumns:"300px 200px 200px"}}>
          <div>Mst. Cybersecuty</div> <div>EPFL - ETHZ</div> <div>2021 - 2023</div>
          <div>Bch. Computer Science</div> <div>EPFL</div>  <div>2018 - 2020</div>
          <div>Bch. Bioengennering</div> <div>EPFL</div> <div>2017 - 2018</div>
        </div>
        <br/>
        <div >
          <h3>Publication</h3>
          <br/>
          <div>
            <div style={{maxWidth:"80%", marginBottom:"5px"}}> {'"'} Your Email Address Holds the Key: Understanding the Connection Between Email and Password Security with Deep Learning {'"'} </div>
            <div >
              <div> <b>Etienne Salimbeni *</b>, Nina Mainusch *, Dario Pasquini</div>
            </div>
            <div> Deep Learning and Security Workshop ( IEEE S&P ) <a href='https://arxiv.org/abs/2306.08638' target='_blank'>arXiv</a> <a href='https://github.com/spring-epfl/DCM_sp' target='_blank'>repo</a> </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
