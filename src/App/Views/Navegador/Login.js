import React, { Component } from 'react';
import { UserController } from '../../Controllers/UserController';
import swal from 'sweetalert';
class Login extends Component {

    constructor ( props ) {
        super( props );
        this.state = {
            password: ""
        };
    }

    handleChange = ( e ) => {
        this.setState( { password: e.target.value } );
    };

    login = () => {
        UserController.logear().then( res => {
            let icon = ( res.login ) ? "success" : "error";
            swal( { icon, text: " ", button: false } );
            setTimeout( () => {
                this.props.eventLogin( res.login );
                swal.close();
            }, 1100 );
        } );
    };

    render () {
        return (
            <div>
                <div>
                    <div className="text-center">
                        <h2>Contraseña</h2>
                        <div class="input-group border border-dark input-group-lg  flex-nowrap">
                            <input type="password" class="form-control" onChange={ this.handleChange } aria-label="Contraseña" aria-describedby="addon-wrapping" />
                        </div>
                        <button onClick={ this.login } className="btn btn-success btn-block mt-2">Logear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
