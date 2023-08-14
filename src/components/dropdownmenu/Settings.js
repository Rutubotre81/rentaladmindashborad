import React, { useState } from 'react';
import './style.css';

const Settings = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
    // Perform any validation or checkpass logic here
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    // Perform any validation for new password here
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Perform any validation for confirm password here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Current Password</h4>
                <div className="form-group">
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                    className="form-control"
                    onBlur={() => {
                      /* Perform checkpass() logic here */}
                    }
                    required
                  />
                  <span id="password-availability-status" style={{ fontSize: '12px' }}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">New Password</h4>
                <div className="form-group">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Confirm Password</h4>
                <div className="form-group">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <div className="text-center">
            <button type="submit" name="changepwd" className="btn btn-success">
              Make Changes
            </button>
            <button type="reset" className="btn btn-danger">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default  Settings;
