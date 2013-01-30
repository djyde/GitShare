
/*
 * GET home page.
 */

models = require('../models')

exports.index = function(req, res){
    models.index(function(err,result){
      console.log(result)
      res.render('index',{result: result});
    })
};

exports.submit = function(req,res){
    res.render('submit');
};

exports.doSubmit = function(req,res){
    models.doSubmit(req.body.reponame,req.body.repourl,req.body.desc,function(err,result){
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
            // console.log(result)
        }
    })
}

exports.login = function(req,res){
    res.render('login');
}