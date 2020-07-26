export default class CoreController{

    models = {};

    loadModels( models = {}){
        for (const key in models) {
            if (models.hasOwnProperty(key)) {
                this.models[key] = models[key];
            }
        }
    }

}