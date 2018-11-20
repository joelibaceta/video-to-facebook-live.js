var videoToFacebookLive = require('./index.js');

var rtmp_uri = "rtmp://live-api-s.facebook.com:80/rtmp/"
var stream_key = "10217959536199143?ds=1&s_sw=0&s_vt=api-s&a=AbwYabf-tuYcrKqS"

process = videoToFacebookLive.fromFile('big_buck_bunny.mp4', rtmp_uri + stream_key)

console.log("Video is being processing with pid: " + process.pid)