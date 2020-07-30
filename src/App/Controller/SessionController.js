import CoreController from '../../Core/CoreController';
import SessionModel from '../Model/SessionModel';

class sessionController extends CoreController {

    constructor(){
        this.loadModel(new SessionModel());  
    }

    

}

export let SesionController = new sessionController();
