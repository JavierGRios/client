import React from "react";
import { useState, useEffect  } from "react";
import axios from 'axios';
import logo from '../../assets/images/portadaReactJuegos.jpg';

const BoxLastItem = () => {

    const [state , setState] = useState([]);

    const productos =async()=>{
        const json = await axios('http://localhost:3002/api/producto/ultimo');
        setState(json.data.data);
        // console.log(json)
        // console.log(json.data.data)

        

    }

     useEffect(()=>{
         productos();
        
    },[setState]);



    return (
         <ul>
            {
             state && state?.map((e)=>{

             return(
                    <div key={e.id}>
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-center text-gray-800">Ultimo Juego Anexado</h5>
                                </div>
                                <div className="card-body">

                                    <h5 className="m-0 font-weight-bold text-center text-blue-800">{e.nombre}</h5>

                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={logo} alt=""/>
                                    </div>
                                    <p className="text-primary">{e.descripcion}</p>
                                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del juego</a>
                                </div>
                            </div>
                        </div>
                    </div>
                     )
                })
        }
       </ul>
                       
   );
}

export default BoxLastItem;