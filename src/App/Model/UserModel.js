import CoreModel from './../../Core/CoreModel';

class userModel extends CoreModel {

    getLogin () {
        return this.api.request( "user", "state", "POST" );
    }

    desLogin () {
        return this.api.request( "user", "salir", "POST" );
    }

    doLogin ( psswd ) {
        return this.api.request( "user", "login", "POST", { psswd } );
    }
}

export let UserModel = new userModel();