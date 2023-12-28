const AboutPage = () => {
  return (
    <>
      <p>
        Hi there! I m Etienne Salimbeni, currently pursuing a joint Master s degree in Computer Science at EPFL Lausanne and ETHZ Zurich. 
      </p>
      <p> 
        I m working on my thesis with guidance from Francesco Craighero and Pierre Vandergheynst, and I ve also completed a project with Dario Pasquini and Carmela Troncoso.
      </p>
      <p>
        Before this, I interned at Oracle Research, with the Swiss confederation s cyberdefense group (Armasuisse/CYD), and at Niantic Labs. My main interests are in making machine learning systems in security and computer graphics easier to understand and use. I m really into figuring out how big models make decisions, showing how these models work in a visual way, focusing on security that centers around data, and exploring the concept of artificial life.
      </p>
      <p>
        Check out my website to see more about what I ve done, both in my studies and my own projects!
      </p>



      <h1>Academic Track</h1>

      <div >
        <div >
          <div>Mst. Cybersecuty</div> <div>EPFL - ETHZ</div> <div>2020 - 2023</div>
          <div>Bch. Computer Science</div> <div>EPFL</div>  <div>2018 - 2020</div>
          <div>Bch. Bioengennering</div> <div>EPFL</div> <div>2016 - 2018</div>
        </div>
        <div >
          <h3>Publication</h3>
          <div>
            <div > Your Email Address Holds the Key: Understanding the Connection Between Email and Password Security with Deep Learning </div>
            <div >
              <div> <b>Etienne Salimbeni *</b></div>
              <div>, Nina Mainusch *</div>
              <div>, Dario Pasquini</div>
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
