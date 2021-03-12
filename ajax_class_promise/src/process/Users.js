import {Ajax, ProxyAjax} from '../Ajax.js'

export default class Users{
	url=''
	dataUsers={}
	constructor(url){
		this.url=url
	}
	async startRequest(){
		const ajaxUser=new Ajax('https://jsonplaceholder.typicode.com/users')
		const proxy=new ProxyAjax(ajaxUser)
		await proxy.startRequest()
		this.saveData(proxy.popo)
	}
	saveData(data){
		this.dataUsers=data
	}
	get popo(){
		return this.dataUsers
	}
}