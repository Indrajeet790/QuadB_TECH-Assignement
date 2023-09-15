const dotenv=require("dotenv/config");
const express=require("express");
const app=express();
const port=process.env.PORT;


app.listen(port,(err)=>{
    if(err){
        console.log('error im running on server');
        
    }else{
        console.log(`Server is running on port ${port}`);
        
    }

})