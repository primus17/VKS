const express = require("express");
const app = express();
const port = 3000
const path = require("path")

app.listen(port,()=>{console.log("el servidor esta abierto en el puerto n° "+port)})
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
/* app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"))
}); */