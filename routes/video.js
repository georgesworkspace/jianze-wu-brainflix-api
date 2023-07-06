
const express=require('express');
const {v4}=require("uuid")
const router=express.Router();
const fs=require('node:fs');
function getVideos(req,res){
const file=fs.readFileSync("./data/video-details.json");
const objectedVideoDetail=JSON.parse(file);
const responsearray=[]
objectedVideoDetail.forEach(video => {
    const videoObject = {
        id: video.id,
        title:video.title,
        channel:video.channel,
        image:video.image
      };
      responsearray.push(videoObject)
});
res.send(responsearray)

}
function getDetail(req,res){
    const file=fs.readFileSync("./data/video-details.json");
    const objectedVideoDetail=JSON.parse(file);
    const {id}=req.params;
    let foundvideo=objectedVideoDetail.find(video=>{
       return video.id===id
        })
        if(!foundvideo){
            return res.sendStatus(400)
        }
        res.json(foundvideo)
    }


function postVideo(req,res){

}
router.get("/",getVideos);
router.get('/:id',getDetail);
router.post('/',postVideo);
module.exports=router;