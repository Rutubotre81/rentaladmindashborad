import React,{useState ,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../sidebarfile/Sidebar";
import Header from "../headerfile/Header";
import './style.css';


const EditProperty =()=>
{
    const {id}= useParams();
    const navigate= useNavigate();

    const [property ,setProperty] = useState({
        PropertyCode: '',
        Type: '',
    });
   
    useEffect(()=>{

    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTenant(prevProperty => ({
          ...prevProperty,
          [name]: value
        }));
      };
    const handleFormSubmit = event => {
        event.preventDefault();
    };
    return(
        <>
            <div className="App">
          <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Header/>
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