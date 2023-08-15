import React,{useState} from "react";
import { useParams } from "react-router-dom";

const PropertyDetails =()=>{
    const { id } = useParams();
  const [tenant, setTenant] = useState(null);
  
  return(
    <>
    <div>
    <h2>View Property Details</h2>
     <p>Property ID :
     <p>Property Code:</p>  
     <p>Name:</p> 
     </p>
    </div>
    </>
  )
}
export default PropertyDetails;