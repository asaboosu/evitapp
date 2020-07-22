import CoreController from "../../Core/CoreController";
import { UserModel } from './../Model/UserModel';

class userController extends CoreController {

    static estadoLogin = true;

    logear ( psswd ) {
        userController.estadoLogin = UserModel.doLogin( psswd );
        return userController.estadoLogin;
    }

    deslogear () {
        userController.estadoLogin = UserModel.desLogin();
        return userController.estadoLogin;
    }

    getLogin () {
        return userController.estadoLogin;
    }
}

export let UserController = new userController();