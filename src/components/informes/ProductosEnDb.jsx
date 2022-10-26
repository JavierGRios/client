import React from "react";
import { useState, useEffect  } from "react";
import axios from 'axios';

const ProductosEnDb = () => {

    const [state , setState] = useState([]);

    const productos =async()=>{
        const json = await axios('http://localhost:3002/api/productos');
        setState(json.data);
        console.log(json.data)

        

    }

     useEffect(()=>{
         productos();
        
    },[setState]);



    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">Productos en la DB</div>
                                 
                                 <div className="h5 mb-0 font-weight-bold text-gray-800">{state.total}</div>
                                                                        
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-warning"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
}

export default ProductosEnDb;


