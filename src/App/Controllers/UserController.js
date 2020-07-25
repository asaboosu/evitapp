import { UserModel } from './../Model/UserModel';

class userController {


    /**
     * 
     * @param {string} psswd 
     */
    logear ( psswd ) {
        return  UserModel.doLogin( psswd );
    }

    deslogear () {
        return UserModel.desLogin();
    }

    getLogin () {
        return UserModel.getLogin();
        
    }
}

export let UserController = new userController();