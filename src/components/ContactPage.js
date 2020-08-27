import React from "react";
//import './homestyle.css';
class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            margin: "0",
            borderRadius: "0px 0px 0px 150px",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "200px", paddingBottom: "150px" }}
          >
            <div
              className="col-xs-12"
              style={{ textAlign: "center", paddingTop: "40px", color: "grey" }}
            >
              <h1>CONTACT ME</h1>
              <h3>
                You can fill out this form with your details and message or you
                can mail me also.
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <center>
            <h1>WELCOME</h1>
          </center>
          <hr />
          <div className="row">
            <div
              className="col-xs-12 col-md-6"
              style={{ textAlign: "center", paddingTop: "80px" }}
            >
              <img src="contact.png" />
            </div>
            <div className="col-xs-12 col-md-4">
              <form>
                <center>
                  <h3>Contact Me</h3>
                </center>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    required
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    style={{ width: "100%" }}
                    className="form-control"
                    rows={7}
                    placeholder="Message"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success form-control"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <center>
                <h3>or</h3>
                <a
                  href="mailto:gauravsunil1489@gmail.com"
                  className="btn btn-primary form-control"
                >
                  Mail Me
                </a>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactPage;
