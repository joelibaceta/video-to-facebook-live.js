const child_process = require('child_process');



var ffmpeg_processes_collection = [];

var video_file_to_facebook_live = function (input_file, rtmp_uri, options) {
    ffmpeg_process = child_process.spawn('ffmpeg', [
        '-re',
        '-i', input_file,
        '-f', 'flv',
        '-profile:v', 'baseline',
        '-pix_fmt', 'yuv420p',
        '-acodec', 'libmp3lame',
        '-ar', '44100',
        '-b:a', '128k',
        '-vcodec', 'libx264',
        '-bufsize', '6000k',
        '-vb', '400k', 
        '-maxrate', '1500k',
        '-preset', 'veryfast',
        '-r', '30',
        '-g', '30',
        rtmp_uri
    ]);
    
    return ffmpeg_process;
}

module.exports.videoFileToFacebookLive = video_file_to_facebook_live;