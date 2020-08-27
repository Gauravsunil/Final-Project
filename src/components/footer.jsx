import React from "react";
//import './homestyle.css';
class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            marginTop: "20px",
            borderRadius: "130px 0px 0px 0px",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "100px", paddingBottom: "150px" }}
          >
            <div
              className="col-xs-12 col-md-6"
              style={{ textAlign: "center", paddingTop: "40px", color: "grey" }}
            >
              <h1>Get IN Touch</h1>
              <h3>
                You can mail me at gauravsunil1489@gmail.com or open contact me
                page.
              </h3>
            </div>
            <div
              className="col-xs-12 col-md-6"
              style={{ paddingTop: "40px", paddingLeft: "80px", color: "grey" }}
            >
              <a href="https://www.facebook.com/Gauravsolanki1489">
                <h3>
                  <span className="fa fa-facebook-square">Facebook</span>
                </h3>
              </a>
              <h3>
                <a href="https://github.com/Gauravsunil">
                  <span className="fa fa-github-square">Github</span>
                </a>
              </h3>
              <h3>
                <a href="https://www.linkedin.com/in/gaurav-solanki-aa27aa151/">
                  <span className="fa fa-linkedin-square">Linkedin</span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
