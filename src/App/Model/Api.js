class api {

    url = 'https://www.fakeapi.online/api/apis/asd/';

    init = {
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    body = {};

    apiUrl = "";

    response ;


    addData(key, value) {
        this.body = {};
        this.body[key] = value;
    }

    addApiUrl(apiUrl) {
        this.apiUrl = apiUrl;
    }

    addUrl(newUrl = ""){
        this.url = newUrl; 
    }

    addInit(initOptions = {}){
        for (const key in initOptions) {
            if (initOptions.hasOwnProperty(key)) {
                this.init[key] = initOptions[key];

            }
        }
    }

    addBody(body = {}){
        this.body = JSON.stringify(body);
    }


    __cleanObject() {
        this.body = {};
        this.apiUrl = "";
    }

    __peticion() {
        response


    }

    get() {



    }

    post() {
        

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    put() {

  

        fetch('https://example.com/profile/avatar', {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
  
        }

    patch() {
 

    }

    delete() {
 
 
 
    }

}

let Api = new api();
