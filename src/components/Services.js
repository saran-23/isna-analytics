import Card from "./Card";
import "../index.css"
function Services() {
  return (
    <div className="container services">
        <br/>
      <br/>
      <br/>
      <br/>
        <h2 className="main-title text-center" > OUR <span className="blue">SERVICES</span></h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2 ">
                        <Card className="ig-fluid" title="Video Analytics" img="analytics(2).svg "/>
                    </div>
                    <div className="col-md-4 mb-4 ">
                    <Card className="img-fld" title="VR/AR" img="vr.svg "  text="" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card className="img-flid" title="IoT Solution" img="iot.svg" text="" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card className="img-fuid" title="Cloud Infra" img="cloud(1).svg"/>
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card className="img-luid" title="Web Application" img="web(1).svg" text="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
