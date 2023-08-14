import React from "react";
import './Tenent.css';

const Tenent = () => {
  return (
    <>
      <div className="col">
      <h2>Tenent List</h2>
        <table className="table bg-white rounded shadow-sm table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">#</th>
              <th scope="col">Tenent Code</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile no</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
              <td>Jonny</td>
              <td>botre@gmail.com</td>
              <td>911275654435</td>
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
              <td>jane@example.com</td>
              <td>911234567890</td>
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
            {/* Add more rows with data here */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tenent;
