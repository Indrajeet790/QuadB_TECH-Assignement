const dotenv=require("dotenv/config");
const express=require("express");
const app=express();
const bodyParser=require("body-parser")

const port=process.env.PORT;

// database connection

const db=require("./config/mySqlConnection")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/assets"));

// routes
app.use("/",require('./routes'))


app.listen(port,(err)=>{
    if(err){
        console.log('error im running on server');
        
    }else{
        console.log(`Server is running on port ${port}`);
        
    }

})