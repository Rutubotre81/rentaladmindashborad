import React ,{useState} from "react";
import Sidebar from "../sidebarfile/Sidebar";
import Header from "../headerfile/Header";
import Property from "./Property";
import { useNavigate } from "react-router-dom";
import './style.css';


const Tenant=()=>{
    const [isSidebarToggled, setIsSidebarToggled] = useState(false);
    
    const [newProperty, setNewProperty] = useState({
      PropertyCode: '',
      Type: '',

    });
    
    const navigate = useNavigate();
    return(
        <>
         <div className="App">
          <div className={`d-flex ${isSidebarToggled ? 'toggled' : ''}`} id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Header/>
                <div className="col">
                    <h2>Add Property</h2>
                    <form>
                        <div className="form-group">
                            <label>Property Code</label>
                            <input 
                              type="text"
                              className="form-control"
                              value={newProperty.PropertyCode}
                              onChange={(e)=>
                              setNewProperty({...newProperty, PropertyCode: e.target.value })}
                              />
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <input 
                              type="text"
                              className="form-control"
                              value={newProperty.Type}
                              onChange={(e)=>
                              setNewProperty({...newProperty, Type: e.target.value })}
                              />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleAddTenant}>
          Add Property
        </button>
                    </form>

                </div>

            </div>

          </div>

        </div>
       
        </>
    );
};

export default Property;
