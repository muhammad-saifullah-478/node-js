
// const { error } = require("console")
const fs = require("fs")
const os=require("os")

// fs.writeFileSync("./test.text", "helo world");

// fs.writeFile("./test.text", "helo world web" ,(error)=>{})

// const result=fs.readFileSync("./contect.text","utf-8")
// console.log(result)


fs.readFile("./contect.text","utf-8", (error,result)=>{
    if(error){
        console.log("Error", error);
    }else{
        console.log(result)
    }
})

// fs.appendFileSync("./test.text",`${Date.now()}hy ther\n` );

// fs.unlinkSync( "./copy.text")

// fs.mkdirSync("my-Doc/a/b", {recursive:true})


// Blooking  
// console.log("1")
// const result = fs.readFileSync("./contect.text", "utf-8");

// console.log(result)
// console.log("2")


// console.log(os.cpus().length)
// Non blooking 
// console.log("1")
// fs.readFile("./contect.text", "utf-8" , (error,result)=>{
    // console.log(result)
// })
// console.log("2")