import React from 'react';

import MenuCardVista from '../Components/MenuCardVista';

class MenuCard extends React.Component {
    render() {
        return (
            <MenuCardVista to={this.props.to} imagen={this.props.imagen} titulo={this.props.titulo}></MenuCardVista>
        );
    }
}

export default MenuCard;