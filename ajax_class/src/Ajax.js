const w = window,
    clg = console.log;

const ajaxTechnology = 'XMLHttp';

const UNSENT            = 0,
    OPENED            = 1,
    HEADERS_RECEIVED  = 2,
    LOADING           = 3,
    DONE              = 4;

const OK                = 200;

class ReadyStates {
    static get UNSENT() {
        return UNSENT;
    }

    static get OPENED() {
        return OPENED;
    }

    static get HEADERS_RECEIVED() {
        return HEADERS_RECEIVED;
    }

    static get LOADING() {
        return LOADING;
    }

    static get DONE() {
        return DONE;
    }
}

class HTTPStatus {
    static get OK() {
        return OK;
    }
}

export class Ajax {
    
    dataReceived;

    constructor(url) {
        this.url = url;

        this.xhr = new XMLHttpRequest();

        this.hardcodedData();
        this.dataReceived = this.getData();
    }
    onSuccess(dataReceived, contentType) {
        clg('=============================================');
        this.dataReceived = dataReceived;
        clg('This:', this);
        clg('Data is:', this.dataReceived);
        //clg('DataReceived: ', this.dataReceived);
        clg('=============================================');
        return this.dataReceived;
    }
    onError(errorText, contentType) {
        clg(errorText);
    }
    onStateChangedEvent(xhr) {
        return () => {
            if (xhr.readyState === ReadyStates.DONE && xhr.status === HTTPStatus.OK) {
                let contentType = xhr.getResponseHeader("Content-Type").toLowerCase();
                if (contentType === 'application/json') {
                    clg('Is a Json');
                    this.onSuccess(JSON.parse(xhr.responseText), contentType);
                } else {
                    clg('Is a Text');
                    this.onSuccess(xhr.responseText, contentType);
                }
            } else if (xhr.readyState === ReadyStates.DONE && xhr.status !== HTTPStatus.OK) {
                this.onError(xhr.responseText, xhr.status);
            }
        }
    }
    getData(){
        let xhr = this.xhr;
        xhr.onreadystatechange = this.onStateChangedEvent(xhr);
        xhr.open('GET', this.url, true);
        xhr.send();
        return xhr;
    }
    find_user(user_id){
        clg('Find user:', user_id);
        clg('Typeof:', typeof this.dataReceived);
        return this.dataReceived.findIndex(user => user.id === user_id);
    }
    hardcodedData(){
        this.harddata = [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
              },
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                  "lat": "-43.9509",
                  "lng": "-34.4618"
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                  "name": "Deckow-Crist",
                  "catchPhrase": "Proactive didactic contingency",
                  "bs": "synergize scalable supply-chains"
                }
              },
            }
        ];
    }
}