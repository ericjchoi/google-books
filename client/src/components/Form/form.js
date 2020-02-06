import React from "react";
import "./form.css";

// This file exports the Input and SearchBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SearchBtn(props) {
  return (
    <button {...props} className="btn btn-danger searchBtn"></button>
  );
}