import React,{useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

const PropertyDetails =()=>{
    const { id } = useParams();
  const [tenant, setTenant] = useState(null);
  
  useEffect (()=>
  {

  });
  
  return(
    <>
    <div>
    <h2>View Property Details</h2>
     <p>Property ID :</p>
     <p>Property Code:</p>  
     <p>Type:</p> 
    
    </div>
    </>
  )
}
export default PropertyDetails;