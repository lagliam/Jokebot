import React from "react";

function Home(joke) {
  let whoThere = "";
  let response = "";
  if (joke) {
    whoThere = joke.joke.whoThere;
    response = joke.joke.response;
  }

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="logo.svg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <p>Knock Knock,</p>
            <p>Who's there?</p>
            <p>{ whoThere }</p>
            <p>{ whoThere } who?</p>
            <p>{ response }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
