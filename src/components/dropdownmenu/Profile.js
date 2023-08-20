import React, { useState } from 'react';

const Profile =()=> 
{

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');

  const [addressL1, setAddressL1] = useState('');
  const [addressL2, setAddressL2] = useState('');
  const [addressArea, setAddressArea] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressDistrict, setAddressDistrict] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressPinCode, setAddressPinCode] = useState('');
  const [panCardID, setPanCardID] = useState('');
  const [aadharID, setAadharID] = useState('');


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  };

  return (
    
 
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="2">
                <div className="col-md-4 col-md-offset-4 col-sm-6 col-xs-12 profile-badge">
                  <div className="profile-pic">
                    <img
                      alt="User Pic"
                      src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                      id="profile-image1"
                      height="200"
                    />
                    <input
                      id="profile-image-upload"
                      className="hidden"
                      type="file"
                      onChange="previewFile()"
                    />
                    <div style={{ color: '#999' }}> </div>
                  </div>
                </div>
              </td>
              <td colSpan="3">
                <div className="col-md-4 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="form-group">
                  <label htmlFor="mobileNo">Mobile No</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td colSpan="3">
                <div className="form-group">
                  <label htmlFor="contactNo">Contact No</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactNo"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td colSpan="3">
                <div className="form-group">
                  <label htmlFor="addressL1">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressL1"
                    placeholder="Address Line 1"
                    value={addressL1}
                    onChange={(e) => setAddressL1(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>



         <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="addressCity">City</label>
                  <select
                    className="form-control"
                    id="addressCity"
                    value={addressCity}
                    onChange={(e) => setAddressCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    {/* Add more city options here */}
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="addressDistrict">District</label>
                  <select
                    className="form-control"
                    id="addressDistrict"
                    value={addressDistrict}
                    onChange={(e) => setAddressDistrict(e.target.value)}
                  >
                    <option value="">Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    {/* Add more district options here */}
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="addressState">State</label>
                  <select
                    className="form-control"
                    id="addressState"
                    value={addressState}
                    onChange={(e) => setAddressState(e.target.value)}
                  >
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    {/* Add more state options here */}
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="addressPinCode">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressPinCode"
                    placeholder="Pin Code"
                    value={addressPinCode}
                    onChange={(e) => setAddressPinCode(e.target.value)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="panCardID">PAN Card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="panCardID"
                    placeholder="PAN Card ID"
                    value={panCardID}
                    onChange={(e) => setPanCardID(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="panCardImage">Upload PAN Card Image</label>
                  <input
                    type="file"
                    className="form-control-file mt-2"
                    id="panCardImage"
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="aadharID">Aadhar Card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="aadharID"
                    placeholder="Aadhar ID"
                    value={aadharID}
                    onChange={(e) => setAadharID(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="aadharImage">Upload Aadhar Card Image</label>
                  <input
                    type="file"
                    className="form-control-file mt-2"
                    id="aadharImage"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="form-group">
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </td>
              <td colSpan="2">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>
            {/* ... (other fields organized similarly) */}
          </tbody>
        </table>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
