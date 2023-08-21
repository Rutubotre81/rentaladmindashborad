import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';

const EditOwner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newOwner, setNewOwner] = useState({
    OwnerCode: '',
    FirstName: '',
    LastName: '',
    MobileNo: '',
    EmailID: '',
    AddressL1: '',
    UserName: '',
    Password: '',
  });

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/owners/${6}`)
      .then(response => {
        setNewOwner(response.data);
      })
      .catch(error => {
        console.error('Error fetching owner data:', error);
      });
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/owners/${6}`, newOwner)
      .then(response => {
        console.log('Owner updated:', response.data);
        navigate('/owners'); // Redirect after successful update
      })
      .catch(error => {
        console.error('Error updating owner:', error);
      });
  };

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };

  return (
    <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header handleToggleSidebar={handleToggleSidebar}/>
          <div className="col">
            <h2>Edit Owner</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Owner Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.OwnerCode}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, OwnerCode: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.FirstName}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, FirstName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.LastName}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, LastName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.MobileNo}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, MobileNo: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newOwner.EmailID}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, EmailID: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.AddressL1}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, AddressL1: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={newOwner.UserName}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, UserName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newOwner.Password}
                  onChange={(e) =>
                    setNewOwner({ ...newOwner, Password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOwner;
