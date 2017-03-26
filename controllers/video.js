const Video = require('../models/Video');

/**
 * GET /
 * Video page.
 */
exports.getVideoPage = (req, res) => {
  Video.find({videoID: ""}, (err, vids) => {
  	if(err) {
		req.flash('errors', { msg: 'Unexpected Error Occurred. Contact Webmaster ASAP.' });
  		return res.redirect('/');
  	}
  	else {
  res.render('video', {
    title: 'Funny vid',
    comments: ["nice vid", "cool"]
  });
	}
  })
};

exports.getVideoUpload = (req, res) => {
  res.render('api/upload', {
    title: 'Video Upload'
  });
};

exports.postVideoUpload = (req, res) => {
  const vid = new Video({
  	videoID: req.file.originalname,
  	title: req.body.title,
  	fileURL: req.file.path
  });
  vid.save((err) => {
      if (err) { 
  		req.flash('errors', { msg: 'Video failed to upload.' });
  		res.redirect('/video/upload');
      }
      else {
		req.flash('success', { msg: 'Video was uploaded successfully.' });
		res.redirect('/');
      }
  });
};

exports.getVideosTitle = (req, res) => {
  Video.find({}, (err, vids) => {
  	if(err) {
		req.flash('errors', { msg: 'Unexpected Error Occurred. Contact Webmaster ASAP.' });
  		return res.redirect('/');
  	}
  	else {
    	res.json({
      		videos : vids
  		});
	}
  })
};


