function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/about.svg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2" >ABOUT <span className="blue">US</span></h2>
            <p className="main-p">
            <span className='text'>
              <b>nDim Analytics</b> is an Immersive Technology company which capable to build highly scalable applications.<br></br> It was founded in 2020
              by a group of young and dynamic professionals with a vision to provides the best solutions to the Industries.
              
              <br>
              </br>We help businesses to make data driven decisions by providing them with the right tools and insights.
              </span>
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
