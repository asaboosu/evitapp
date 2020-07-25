import { UserModel } from '../Model/SessionModel';

class userController {

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