
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.submit = function(req,res){
  res.render('submit');
};

exports.login = function(req,res){
  res.render('login');
}