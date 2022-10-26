import React from "react";
import { useState, useEffect  } from "react";
import axios from 'axios';


const BoxLastItem = () => {

    const [state , setState] = useState([]);

    const producto =async()=>{
        const json = await axios('http://localhost:3002/api/producto/ultimo');
        setState(json.data);
        

        //console.log(json.data)

        

    }

     useEffect(()=>{
        producto();
        
    },[setState]);

    

   

    
    return (
         
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ÚLTIMO PRODUCTO CARGADO</h6>
                </div>
                <div className="card-body" >
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}}  alt="image "/>
                    </div>
                    <h3>Nombre: </h3>
                    <p>Precio: $</p>
                    <p>Descripcion: </p>
                    
                </div>
            </div>
        </div>
        )
            
         
            }
    
                
            
    


    
 
export default BoxLastItem;