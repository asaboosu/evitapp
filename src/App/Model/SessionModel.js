import CoreModel from "../../Core/CoreModel";

export default class SessionModel extends CoreModel {

    
   
    delSession(session) {
        this.api.addApiUrl("/session/" + session.id);
        return this.api.delete();
    }

    modSession(session) {
        this.api.addApiUrl("/session");
        this.api.addBody(session);
        return this.api.put();
    }

    newSession(session) {
        this.api.addApiUrl('/session');
        this.api.addBody(session);
        return this.api.post();
    }

    
}