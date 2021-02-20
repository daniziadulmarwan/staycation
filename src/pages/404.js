import React from "react";

import { withRouter } from "react-router-dom";

import Button from "../elements/Button";

function NotFound(props) {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          <h1 className="mb-5" style={{ fontSize: "120px", fontWeight: 600 }}>
            404
          </h1>
          Are you lost ?
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button
              className="btn mt-5"
              type="link"
              onClick={() => props.history.goBack()}
              isPrimary
            >
              Back to Home Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
