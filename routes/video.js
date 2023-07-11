const express = require("express");
const { v4 } = require("uuid");
const router = express.Router();
const fs = require("node:fs");
function getVideoDetail(){
    const videoDetail=fs.readFileSync("./data/video-details.json");
    
    return JSON.parse(videoDetail)
}
function getVideos(req, res) {
 const videoDetail=getVideoDetail();
//   const objectedVideoDetail = JSON.parse(videoDetail);
  const responsearray = [];
  videoDetail.forEach((video) => {
    const videoObject = {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
    responsearray.push(videoObject);
  });
  res.send(responsearray);
}
function getDetail(req, res) {
    const videoDetail=getVideoDetail();
//   const objectedVideoDetail = JSON.parse(videoDetail);
  const { id } = req.params;
  let foundvideo = videoDetail.find((video) => {
    return video.id === id;
  });
  if (!foundvideo) {
    return res.sendStatus(400);
  }
  res.json(foundvideo);
}
function writeVideoDetail(newVideoDetail){
   let jsonVideoDetail=JSON.stringify(newVideoDetail);
 fs.writeFileSync("./data/video-details.json",jsonVideoDetail)
}
function postVideo(req, res) {
  let videoDetail=getVideoDetail()

  let newobject = {
    id: v4(),
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    title: (req.body.title),
    description: (req.body.description),
  };
  videoDetail.push(newobject);
  writeVideoDetail(videoDetail)
  res.send("ok");
}
router.get("/", getVideos);
router.get("/:id", getDetail);
router.post("/", postVideo);
module.exports = router;
