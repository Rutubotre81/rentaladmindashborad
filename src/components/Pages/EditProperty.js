import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebarfile/Sidebar';
import Header from '../headerfile/Header';

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newProperty, setNewProperty] = useState({
    PropertyCode: '',
    Type: '',
    HouseNo: '',
    FloorNo: '',
    BuildingNo: '',
    Society: '',
    Road_Location: '',
    AddressArea: '',
    AddressCity: '',
    AddressDistrict: '',
    AddressState: '',
    AddressPinCode: '',
    MonthlyRent: '',
    Deposit: '',
  });

  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/properties/${id}`)
      .then(response => {
        setNewProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching property data:', error);
      });
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

   axios.put(`http://127.0.0.1:8000/api/properties/${id}`, newProperty)
      .then(response => {
        console.log('Property updated:', response.data);
        navigate('/properties'); // Redirect after successful update
      })
      .catch(error => {
        console.error('Error updating property:', error);
      });
  };

  const handleToggleSidebar = () => {
    setIsSidebarToggled(prevState => !prevState);
  };

    
    return(
        <>
            <div className="App">
      <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header handleToggleSidebar={handleToggleSidebar}/>
          <div className="col">
            <h2>update</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Property Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.PropertyCode}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, PropertyCode: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.Type}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, Type: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>House Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.HouseNo}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, HouseNo: e.target.value })
                  }
                />
                </div>
                 <div className="form-group">
                <label>Floor Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.FloorNo}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, FloorNo: e.target.value })
                  }
                />
              </div>
            
              <div className="form-group">
                <label>Building Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.BuildingNo}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, BuildingNo: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Society</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.Society}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, Society: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
               <label>Road Location</label>
                        <input
                      type="text"
                   className="form-control"
                value={newProperty.Road_Location} 
               onChange={(e) =>
              setNewProperty({ ...newProperty, Road_Location: e.target.value }) 
                     }
                    />
                   </div>


              <div className="form-group">
                <label>Address Area</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.AddressArea}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, AddressArea: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.AddressCity}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, AddressCity: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>District</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.AddressDistrict
                  }
                  onChange={(e) =>
                    setNewProperty({ ...newProperty,AddressDistrict
                      : e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.AddressState}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, AddressState: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.AddressPinCode}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, AddressPinCode: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Monthly Rent</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.MonthlyRent}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, MonthlyRent: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Deposit</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProperty.Deposit}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, Deposit: e.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary" >
              update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}
export default EditProperty;