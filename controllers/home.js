const Video = require('../models/Video');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  Video.find({}, (err, vids) => {
  	if(err) {
		req.flash('errors', { msg: 'Unexpected Error Occurred. Contact Webmaster ASAP.' });
  		return res.redirect('/');
  	}
    res.render('home', {
      title: 'Home',
      videos : vids
  	});
  })

};
