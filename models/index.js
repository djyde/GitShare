db = require('mongoskin').db('localhost/repos');

exports.index = function(callback){
    db.collection('repo').find().toArray(function(err,result){
        callback(err,result);
    });
};

exports.doSubmit = function(name,url,desc,callback){
    db.collection('repo').insert({
        repoName: name,
        repoURL: url,
        desc: desc
    },function(err,result){
        callback(err,result);
    })
}