import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <div
        id="homeImage"
        style={{ backgroundImage: "url('/static/frontend/img/photo1.jpg')" }}
      >
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <span>
              <h1>Photomap</h1>
              <h4>
                Find the exact locations where amazing photos have been taken
              </h4>
              <div className="btn btn-light mt-3">Join for free</div>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
