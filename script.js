window.promises = [promise1(), promise2(),promise3(),promise4(),promise5()];
var output = document.getElementById('output');
// Do not change the code above this
// add your promises to the array `promises`
let promise1 = new promise((resolve,reject)=>{
	setTimeOut(()=>{
		resolve('I am First promise')
		output.innerHTML = 'I am First promise'
	},1000)
})

let promise2 = new promise((resolve,reject)=>{
	setTimeOut(()=>{
		resolve('I am second promise')
		output.innerHTML = 'I am second promise'
	},1000)
})
let promise3 = new promise((resolve,reject)=>{
	setTimeOut(()=>{
		resolve('I am third promise')
		output.innerHTML = 'I am third promise'
	},1000)
})
let promise4 = new promise((resolve,reject)=>{
	setTimeOut(()=>{
		resolve('I am fourth promise')
		output.innerHTML = 'I am fourth promise'
	},1000)
})
let promise5 = new promise((resolve,reject)=>{
	setTimeOut(()=>{
		resolve('I am fifth promise')
		output.innerHTML = 'I am fifth promise'
	},1000)
})


Promise.race(promises).then((value) => {
  console.log(value);
}
});