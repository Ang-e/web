//1、
function firstArr(data,select){
	return data.filter(da=>{
		return da._status=="create" && select.includes(da.prLineId)
	})
}
//2、
function secondArr(data){
	return data.map(da=>{
		if(da._status=="update"){
		    da.name='jss'
			da.age=21
		}
		return data
	})
}
//3、
function thirdArr(data){
	return data.every(da=>da._status=="update")
}

//1、
function firstStr(str){
	let obj={}
	let query=str.split('?')[1].split('&')
	query.forEach(qu=>{
		let arr=qu.split('=')
		obj[arr[0]]=arr[1]
	})
	return obj
}
//2、
function secondStr(str){
	return str.substring(5,10)
}
//3、
function thirdStr(arr){
	return arr.join('-')
}
