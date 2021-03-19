import React from "react";
import "./Form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Form() {
  return (
    <form id="search-form">
      <div className="container">
      <div className="row">
        <div class="col-6">
          <input
            type="search"
            className="form-control"
            placeholder="Search a city"
            id="city-input"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-success w-100" id="btn-current">
            Current
          </button>
        </div>
      </div>
      </div>
    </form>
  );
}
