import React from 'react';


const TituloVista = (props) => {
    return (

        <div>
            <div className=" col-md-1 col-sm-12 text-center ">
                <h1 className="font-weight-bolder" >{props.principal}</h1>
            </div>
            <div className=" col-md-2 col-sm-12 ">
                <spam className="align-middle"><h2 className="font-weight-bolder ">{props.secundario}</h2></spam>
            </div>
        </div>
    );

}

export default TituloVista;