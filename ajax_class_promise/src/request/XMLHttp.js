import StatesRequest from './StatesRequest.js'
import HTTPStatus from './HTTPStatus.js'

export default class XMLHttp {
	constructor(url) {
        this.dataReceived = {};
        this.url = url;

        this.xhr = new XMLHttpRequest();
    }
    onSuccess(dataReceived){
        this.dataReceived=dataReceived;
    }
    onError(errorText) {
        console.error(errorText);
    }
    getData(){
        return new Promise(resol=>{
            let xhr = this.xhr;
            xhr.onreadystatechange=()=>{
                if (xhr.readyState === StatesRequest.DONE && xhr.status === HTTPStatus.OK) {
                    let contentType = xhr.getResponseHeader("Content-Type").toLowerCase();
                    if (contentType.match(/application\/json/gi)) {
                        resol({status: xhr.status, err: false});
                        this.onSuccess(JSON.parse(xhr.responseText), contentType);
                    } else {
                        resol({status: xhr.status, err: false});
                        this.onSuccess(xhr.responseText, contentType);
                    }
                } else if (xhr.readyState === StatesRequest.DONE && xhr.status !== HTTPStatus.OK) {
                    resol({err: true, status: xhr.status});
                    this.onError(xhr.responseText, xhr.status);
                }
            }
            
            xhr.open('GET', this.url, true);
            xhr.send();
        })
    }
    get popo(){
        return this.dataReceived;
    }
}