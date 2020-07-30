export default class SessionDto {

    id;

    name;

    email;

    password;

    token;

    /**
     * Objeto creado en cliente
     * @param {string} email 
     * @param {string} password 
     * @param {string} token 
     */
    constructor(email,password, token){
        this.email = email;
        this.password = password;
        this.token = token; 
    }

    /**
     * 
     * @param {int} id 
     * @param {string} name 
     * @param {string} email 
     * @param {string} password 
     * @param {string} token 
     */
    constructor(id,name,email,password,token){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token; 
    }
}