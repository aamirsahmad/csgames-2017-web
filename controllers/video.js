/**
 * GET /
 * Video page.
 */
exports.getVideoPage = (req, res) => {
  res.render('video', {
    title: 'Video'
  });
};

exports.getVideoUpload = (req, res) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postVideoUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/video/upload');
};
