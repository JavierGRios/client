import React from "react";
import axios from "axios";
import { useState, useEffect  } from "react";


const TotalUsuariosEnDb = () => {

    const [state, setState]=useState([]);

    const apiUser = async()=>{

        const json= await axios('http://localhost:3002/api/usuarios');
        setState(json.data);
        console.log(json.data)

    }
    useEffect(()=>{
        apiUser();
   },[setState]);

    
        

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">TOTAL DE USUARIOS EN DB</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{state.total}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default TotalUsuariosEnDb;