 const express = require("express");
 const app = express();
 app.set("view engine","ejs")
 


 app.get("/",(req,resp)=>{

    resp.render("home")
 })
 app.get("/search",(req,resp)=>{
    const query = req.query.Name;
    
 fetch('https://api.themoviedb.org/3/search/movie?api_key=a1a53971bf595b0030a770e6aec94938&query='+query)
 .then((data)=>data.json())
 .then((data)=>{
    resp.render("movie",{data:data})   
 })

    
 })


 
 app.listen(3000,()=>{
    console.log("server is running ")
 })