import React from 'react';

import  {Link} from 'react-router-dom';


class MenuCard extends React.Component {
    render(){
        return(
            <div className="card mx-auto mt-2 p-2 text-center border border-dark shadow shadow-lg  rounded rounded-lg">
            
            <Link to={this.props.to}><button onClick={() =>  {}} className="btn btn-primary w-75"><h3><img src={this.props.imagen} className="w-50 card-img-top mx-auto  " alt="..." /></h3></button></Link>
                <h2>{this.props.titulo}</h2>
                </div>
        );
    }
}

export default MenuCard;