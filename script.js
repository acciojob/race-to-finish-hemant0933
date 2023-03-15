window.promises = [];
// var output = document.getElementById('output');
// // Do not change the code above this
// // add your promises to the array `promises`
// let promise1 = new promise((resolve,reject)=>{
// 	setTimeOut(()=>{
// 		resolve('I am First promise')
// 		output.innerHTML = 'I am First promise'
// 	},1000)
// })

// let promise2 = new promise((resolve,reject)=>{
// 	setTimeOut(()=>{
// 		resolve('I am second promise')
// 		output.innerHTML = 'I am second promise'
// 	},1000)
// })
// let promise3 = new promise((resolve,reject)=>{
// 	setTimeOut(()=>{
// 		resolve('I am third promise')
// 		output.innerHTML = 'I am third promise'
// 	},1000)
// })
// let promise4 = new promise((resolve,reject)=>{
// 	setTimeOut(()=>{
// 		resolve('I am fourth promise')
// 		output.innerHTML = 'I am fourth promise'
// 	},1000)
// })
// let promise5 = new promise((resolve,reject)=>{
// 	setTimeOut(()=>{
// 		resolve('I am fifth promise')
// 		output.innerHTML = 'I am fifth promise'
// 	},1000)
// })


// Promise.any(promises).then((value) => {
//   console.log(value);
// }
// const promises = [];

for (let i = 0; i < 5; i++) {
  promises.push(new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} seconds.`);
    }, randomTime * 1000);
  }));
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;

    // Check the result of the resolved promise
    const promiseIndex = promises.findIndex((promise) => promise[Symbol.for('PromiseState')] === 'fulfilled');
    console.log(`Promise ${promiseIndex + 1} was the first to resolve with the result: ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });


// });