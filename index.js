
const express=require('express');
const cors=require('cors');
const app=express();
const videoRoutes=require('./routes/video')
app.use(express.json());
app.use(cors())
app.use(express.static('public'))
app.use("/videos", videoRoutes);


app.listen(8080,function(){
    console.log("listening");
    });