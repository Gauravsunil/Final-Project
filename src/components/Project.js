import React from "react";
//import './homestyle.css';
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
    };
  }
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
            style={{ paddingTop: "100px", paddingBottom: "200px" }}
          >
            <center>
              <div
                className="col-xs-12"
                style={{
                  textAlign: "center",
                  paddingTop: "40px",
                  color: "grey",
                }}
              >
                <h1>PROJECTS</h1>
                <h3>
                  I have worked on many projects checkout my latest projects.
                </h3>
              </div>
            </center>
          </div>
        </div>

        <div className="container-fluid">
          <center>
            <h1>Projects</h1>
          </center>
          {this.state.projects.map((item) => {
            return (
              <div
                className="row"
                key={item.id}
                style={{
                  paddingTop: "70px",
                  paddingBottom: "100px",
                  backgroundColor: "black",
                  borderRadius: "130px 0px 80px 0px",
                }}
              >
                <div className="col-xs-12 col-md-6">
                  <img src={item.img} style={{ width: "100%" }} />
                </div>
                <div
                  className="col-xs-12 col-md-6"
                  style={{ textAlign: "center" ,color:'grey'}}
                >
                  <h1>{item.name}</h1>
                  <h3>{item.description}</h3>
                  <p>
                    <h3>Technologies Used: </h3>
                    {item.technology}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="btn btn-primary buttn"
                  >
                    SEE PROJECT
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Project;
