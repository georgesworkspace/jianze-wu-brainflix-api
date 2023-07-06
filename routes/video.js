const videoDeatil=require('../data/video-details.json')
const express=require('express');
const {v4}=require("uuid")
const router=express.Router();
function getVideos(req,res){
const objectedVideoDetail=JSON.parse(videoDeatil);
const id=objectedVideoDetail.id
const title=objectedVideoDetail.title
const image=objectedVideoDetail.image
const channel=objectedVideoDetail.channel
res.send({id,title,image,channel})

}
function getDetail(req,res){

}
function postVideo(req,res){

}
router.get("/",getVideos);
router.get('/:id',getDetail);
router.post('/',postVideo);
module.exports=router;