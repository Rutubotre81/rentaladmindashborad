import React,{useState ,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../sidebarfile/Sidebar";
import Header from "../headerfile/Header";

import axios from "axios";


const EditProperty =()=>
{
    const { id }= useParams();
    const navigate= useNavigate();

    const [isSidebarToggled, setIsSidebarToggled] = useState(false);

    const [property ,setProperty] = useState({
        
        PropertyCode: '',
        Type: '',
    });
    const handleToggleSidebar = () => {
      setIsSidebarToggled(prevState => !prevState);
    };
   
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/properties/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching tenant data:', error);
      });
  }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProperty(prevProperty => ({
          ...prevProperty,
          [name]: value
        }));
      };
    const handleFormSubmit = event => {
        event.preventDefault();
    };
    const handleDelete = () => {
      if (window.confirm('Are you sure you want to delete this property?')) {
        axios.delete(`http://127.0.0.1:8000/api/properties/${id}`)
          .then(response => {
            console.log('Property deleted:', response.data);
            navigate('/properties'); // Change the navigation path to the properties list page
          })
          .catch(error => {
            console.error('Error deleting property:', error);
          });
      }
    };
    
    return(
        <>
            <div className="App">
          <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Header handleToggleSidebar={handleToggleSidebar}/>
                <div className="col">
                    <h2>Add Property</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Property Code</label>
                            <input 
                              type="text"
                              className="form-control"
                              value={property.PropertyCode}
                              onChange={handleInputChange}
                              />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                              type="text"
                              className="form-control"
                              value={property.Type}
                              onChange={handleInputChange}
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

        </>
    )
}
export default EditProperty;