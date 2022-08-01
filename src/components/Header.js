import { Link } from "react-scroll";
import {openBar} from '../components/Navbar';
function Header() {
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }
  return (
    <header>
      
      <video src="/video.mp4" loop autoPlay muted></video>
      
      <h1 style={{ textAlign:"center",marginTop:"0%" }} className="scale-up-horizontal-left ">   </h1>
      
      <div className="row" id="home">
        
{/* <body id="home">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
        </body>     */}
      </div>

      <div className="headerbg"></div>
      <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
              
                    <h1 className="scale-up-horizontal-left " style={{textAlign:"center",marginTop:"10%"}}>Welcome To <span className="blue">ndim Analytics</span></h1> </Link>
    </header>
    
  );
}
export default Header;
