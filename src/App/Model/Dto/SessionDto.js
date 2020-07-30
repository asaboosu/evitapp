export default class SessionDto {

    id;

    nombre;

    email;

    contraseña;

    token;

    constructor(email,contraseña, token){
        this.email = email;
        this.contraseña = contraseña;
        this.token = token; 
    }

    constructor(id,nombre,email,contraseña,token){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.token = token; 
    }
}