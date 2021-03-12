export default class CompareData{
	dataCompare=[]
	constructor(users, posts){
		this.users=users
		this.posts=posts
		this.compare()
	}
	compare(){
		const usersData=this.users.popo
		const postsData=this.posts.popo
		let userSingle=[]
		this.dataCompare=postsData.reduce((arry, val)=>{
			userSingle=usersData.filter(val2=>val2.id===val.userId)
			if(userSingle.length){
				arry.push({
					username: userSingle[0].username,
					userId: userSingle[0].id,
					postId: val.id,
					title: val.title
				})
			}
			return arry
		}, [])
	}
	get popo(){
		return this.dataCompare
	}
}