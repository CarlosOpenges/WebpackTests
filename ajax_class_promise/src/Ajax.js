import XMLHttp from './request/XMLHttp.js'
import Fetch from './request/Fetch.js'


export class ProxyAjax{

    ajaxTechnology = 'XMLHttp'
    // ajaxTechnology = 'fetch'

    constructor(clazz){
        this.clazz=clazz
        this.fetch=new Fetch(this.clazz.url)
        this.xmlRe=new XMLHttp(this.clazz.url)
        // this.startRequest()
    }
    async startRequest(){
        if(this.ajaxTechnology === 'XMLHttp'){
            await this.clazz.getData(this.xmlRe)
        }else{
            await this.clazz.getData(this.xmlRe)
        }
    }
    get popo(){
        return this.clazz.dataReceived;
    }
}

export class Ajax {
    constructor(url) {
        this.dataReceived = {};
        this.url = url;
    }
    onSuccess(data){
        this.dataReceived=data
    }
    async getData(clazzRequest){
        await clazzRequest.getData()
        this.onSuccess(clazzRequest.popo)
    }
    get popo(){
        return this.dataReceived;
    }
}