import React from "react";
import './style.css';

const Property = () => {
  return (
    <div className="row my-5">
      <div className="col">
        <div className="table-responsive">
          <table className="table bg-white rounded shadow-sm table-hover">
            <thead>
              <tr>
                <th colSpan="6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="property-heading">Property</h2>
                    <button className="btn btn-success add-button">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" width="50">#</th>
                <th scope="col">Property Code</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>46</td>
              <td>Jane</td>
              <td>
              <span className="btn btn-link text-primary">
                  <i className="fas fa-eye"></i>
                </span>
                <span className="btn btn-link text-warning">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="btn btn-link text-danger">
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>46</td>
              <td>Jane</td>
              <td>
              <span className="btn btn-link text-primary">
                  <i className="fas fa-eye"></i>
                </span>
                <span className="btn btn-link text-warning">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="btn btn-link text-danger">
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Property;
