import CoreModel from "../../Core/CoreModel";

export default class SessionModel extends CoreModel {


    getSession(session) {
        this.api.addApiUrl('/session/getById/' + session.id);
        let resp = new SessionDto(this.api.get());
        return resp;
    }

    delSession(session) {
        this.api.addApiUrl('/session/delByPass');
        this.api.addBody(session);
        let resp = this.api.delete();
        return resp;
    }

    newSession(session) {
        this.api.addApiUrl('/session/create');
        this.api.addBody(session);
        let resp = new SessionDto(this.api.post());
        return resp;
    }
}