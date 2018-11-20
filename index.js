'use strict';

var ffmpeg_wrapper = require('./ffmpeg_wrapper.js')

module.exports = {
    fromFile: ffmpeg_wrapper.videoFileToFacebookLive
}

