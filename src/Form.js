import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <form id="search-form">
      <div class="row">
        <div class="col-6">
          <input
            type="search"
            class="form-control"
            placeholder="Search a city"
            id="city-input"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="Search" class="btn btn-primary w-100" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-success w-100" id="btn-current">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
