import React from "react";
import warehousing from "../../images/warehousing.jpg";
const WareHousing = () => {
  return (
    <div>
      <div className="d-flex  container">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img className=" " src={warehousing} alt="warehousing" />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Our Warehousing process</h5>
          <p>
            Another instance of placeholder content for this other custom
            component. It is intended to mimic what some real-world content
            would look like, and we're using it here to give the component a bit
            of body and size.Another instance of placeholder content for this
            other custom component. It is intended to mimic what some real-world
            content would look like, and we're using it here to give the
            component a bit of body and size. Another instance of placeholder
            content for this other custom component. It is intended to mimic
            what some real-world content would look like, and we're using it
            here to give the component a bit of body and size.Another instance
            of placeholder content for this other custom component. It is
            intended to mimic what some real-world content would look like, and
            we're using it here to give the component a bit of body and size.
          </p>
          <button className="btn btn-primary">read more</button>
        </div>
      </div>
    </div>
  );
};

export default WareHousing;
