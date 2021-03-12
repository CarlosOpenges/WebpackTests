import XMLHttp from './request/XMLHttp'
import Fetch from './request/Fetch'


export class ProxyAjax{

    ajaxTechnology = 'XMLHttp'
    // ajaxTechnology = 'fetch'

    constructor(clazz){
        this.clazz=clazz
        this.fetch=new Fetch(this.clazz.url)
        this.xmlRe=new XMLHttp(this.clazz.url)
        this.startRequest()
    }
    startRequest(){
        if(this.ajaxTechnology === 'XMLHttp'){
            this.clazz.getData(this.xmlRe)
            .then().catch(console.error)
        }else{
            this.clazz.getData(this.xmlRe)
            .then().catch(console.error)
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
    getData(clazzRequest){
        return new Promise(resol=>{
            clazzRequest.getData()
            .then(resp=>{
                resol()
                this.onSuccess(clazzRequest.popo)
            }).catch(console.error)
        })
    }
    find_user(user_id){
        clg('Find user:', user_id);
        clg('Typeof:', typeof this.dataReceived);
        return this.dataReceived.findIndex(user => user.id === user_id);
    }
}