import React from "react";

function AddJoke() {

  return (
    <div className="addJoke">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg">
            <h1 className="font-weight-light">Save Joke</h1>
            <p>Tell Jokebot a knock knock joke to save</p>
            <form action="api/jokes" method="POST">
              <div className="form-group">
                <label>Who's There</label>
                <input
                  type="text"
                  name="whoThere"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label>Response</label>
                <input
                  type="text"
                  name="response"
                  className="form-control form-control-lg"
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJoke;
