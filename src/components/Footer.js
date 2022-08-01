import { Link, animateScroll as scroll } from 'react-scroll';

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">nDim Analytics</h1>
                <p className="footer-text">
                <b style={{fontsize: "10px" }}>Your Dream Our Mission </b>

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title"><span className="blue">Important Link</span></p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link> 
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title"><span className="blue">Contact Us</span></p>
                <ul>
                  <li>
                    <Link to="#">gokulakrishnanmay29@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Akshaya street, Elakiya Nagar</Link>
                  </li>
                  <li>
                    <Link to="#" >9040556990</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title"><span className="blue">Social Media</span></p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > LinkedIn</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#"><i class="fa-brands fa-facebook-f"></i> Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
