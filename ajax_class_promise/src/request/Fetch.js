import StatesRequest from './StatesRequest.js'
import HTTPStatus from './HTTPStatus.js'

export default class Fetch {
	constructor(url) {
        this.dataReceived = {};
        this.url = url;
    }
    onSuccess(dataReceived){
        this.dataReceived=dataReceived;
    }
    onError(errorText) {
        console.error(errorText);
    }
    getData(){
        return new Promise(resol=>{
        	fetch(this.url)
			.then(response =>{
				if(HTTPStatus.OK === response.status)
					return response.json()
				else{
					resol({err: true})
					this.onError(JSON.stringify(response))
				}
			})
			.then(data => {
				console.log('FT jajja kikokio')
				resol({err: false})
				this.onSuccess(data)
			})
			.catch(err => {
				console.log('FT acá paso un error ome que raro')
				this.onError(JSON.stringify(err));
				resol({err: true})
			})
        })
    }
    get popo(){
        return this.dataReceived;
    }
}