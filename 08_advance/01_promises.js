const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is working");
        resolve("Done")
;    })
})

promiseOne.then((message)=> {
    console.log(`promise Then is Working : ${message}`)
})