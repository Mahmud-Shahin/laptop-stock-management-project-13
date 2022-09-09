import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import mission from "../../images/mission.png";
import clients from "../../images/clients.png";
import vission from "../../images/vission.png";

const GeneralInformation = () => {
  return (
    <div>
      <h2 className="text-center mt-5">General Information</h2>

      <Tabs
        defaultActiveKey="Our mission"
        id="justify-tab-example"
        className="mb-5 container mt-5"
        justify
      >
        <Tab className="container" eventKey="Our mission" title="Our mission">
          <div className="row g-0  position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img className=" " src={mission} alt="mission" />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Our Mission</h5>
              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like, and we're using it here to give the component a
                bit of body and size.
              </p>

              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like,
              </p>
            </div>
          </div>
        </Tab>

        <Tab className="container" eventKey="Our Client" title="Our Client">
          <div className="row g-0  position-relative">
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Our Clients</h5>
              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like, and we're using it here to give the component a
                bit of body and size.
              </p>

              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like,
              </p>
            </div>
            <div className="col-md-6 mb-md-0 p-md-4">
              <img className=" " src={clients} alt="clients" />
            </div>
          </div>
        </Tab>

        <Tab className="container" eventKey="Our vission" title="Our vission">
          <div className="row g-0  position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img className=" " src={vission} alt="vission" />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Our vission</h5>
              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like, and we're using it here to give the component a
                bit of body and size.
              </p>

              <p>
                Another instance of placeholder content for this other custom
                component. It is intended to mimic what some real-world content
                would look like,
              </p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default GeneralInformation;
