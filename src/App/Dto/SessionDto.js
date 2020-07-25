export default class SessionDto {

    nombre;

    password;

    login;


    constructor(nombre = "", login = false) {
        this.nombre = nombre;
        this.login = login;
    }

    constructor(nombre = "", password = "", login = false) {
        this.nombre = nombre;
        this.password = password;
        this.login = login;
    }


}