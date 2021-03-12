import {Ajax, ProxyAjax} from '../Ajax.js'

export default class Posts{
	url=''
	dataPost={}
	constructor(url){
		this.url=url
	}
	async startRequest(){
		const ajaxPost=new Ajax('https://jsonplaceholder.typicode.com/posts')
		const proxy=new ProxyAjax(ajaxPost)
		await proxy.startRequest()
		this.saveData(proxy.popo)
	}
	saveData(data){
		this.dataPost=data
	}
	get popo(){
		return this.dataPost
	}
}