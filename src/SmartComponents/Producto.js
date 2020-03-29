import React from 'react';

import ProductoVista from './../Components/Producto/ProductoVista';

class Producto extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ProductoVista></ProductoVista>
        );
    }
}

export default Producto;