export default class CoreController{

    /**
     * Link instances of the models in the controller;
     */
    models = {};

    /**
     * 
     * @param {CoreModel} models. example: {someModel: new SomeModel()}
     */
    loadModel( models = {}){
        for (const key in models) {
            if (models.hasOwnProperty(key)) {
                this.models[key] = models[key];
            }
        }
    }

}