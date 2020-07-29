export default class CoreController{

    /**
     * Link instances of the models in the controller;
     */
    models = {};

    /**
     * 
     * @param {CoreModel} model
     */
    loadModel(model) {
        this.models[model.constructor.name] = model;
    }   

}