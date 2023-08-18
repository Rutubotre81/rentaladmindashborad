import React,{useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails =()=>{
    const { id } = useParams();
  const [property, setProperty] = useState(null);
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/properties/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching property data:', error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }
  
  return(
    <>
    <div>
    <h2>View Property Details</h2>
     <p>Property ID :{property.id}</p>
     <p>Property Code:{property.PropertyCode}</p>  
     <p>Type:{property.Type}</p> 
    
    </div>
    </>
  )
}
export default PropertyDetails;