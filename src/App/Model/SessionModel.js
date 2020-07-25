import CoreModel from "../../Core/CoreModel";
import SessionDto from "../Dto/SessionDto";

export default class SessionModel extends CoreModel {


    getSession(session) {
        this.api.addApiUrl('/session/getById/' + session.id);
        let resp = new SessionDto(this.api.get());
        return resp;
    }

    delSession(session) {
        this.api.addApiUrl('/session/delByPassword');
        this.api.addBody(session);
        let resp = new SessionDto(this.api.delete());
        return resp;
    }

    postSession(session) {
        this.api.addApiUrl('/session/create');
        this.api.addBody(session);
        let resp = new SessionDto(this.api.post());
        return resp;
    }
}