import CoreController from '../../Core/CoreController';
import SessionModel from '../Model/SessionModel';

class sessionController extends CoreController {

    constructor() {
        this.loadModel(new SessionModel());
    }

    getLogin() {
        let session = new SessionDto();
        this.models.SessionModel.newSession(session){ }

    }

    delLogin() { }

    newLogin() {

    }






}

export let SesionController = new sessionController();
