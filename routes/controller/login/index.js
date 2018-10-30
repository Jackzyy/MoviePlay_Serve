var express = require('express');
var router = express.Router();
var adminModel = require('../../../dataBase/model/admin')
var movieModel = require('../../../dataBase/model/movie')
var request = require('request')

router.post('/login', (req, res) => {
    let user = {
        username,
        password
    } = req.body

    adminModel.findOne({username:username}).then(data =>{
        if(data.password == password){
            req.session.user = data
            data.password = undefined
            res.json({
                code:200,
                data,
                msg:'登录成功'
            });
        }else{
            res.json({
                code:202,
                msg:'密码不正确'
            });
        }
    }).catch(err =>{
         res.json({
             code:201,
             msg:'该用户不存在'
         });
    })

});

router.post('/register', function(req, res, next) {
    let userInfo = {
      username,
      password,
      sex,
      desc
    } = req.body

    console.log(userInfo);
    adminModel.findOne({username}).then(data =>{
        if(data){
          res.json({
              code:201,
              msg:'该用户已存在'
          })
        }else{
          adminModel.create(userInfo).then(data =>{
              res.json({
                  code:200,
                  data,
                  msg:'注册成功'
              })
          }).catch(err =>{
              res.json({
                  code:400,
                  msg:'缺少必要参数'
              })
          })
        }
    })
});

router.get('/collections', (req, res) => {
    let user = req.session.user._id
    movieModel.find({user}).populate({
        path:'user',
        select:'-password'
    }).then(data =>{
         res.json({
             code:200,
             data
         });
    })
});

router.post('/collections', (req, res) => {
    // console.log(req.body.url);
    let movieUrl = req.body.url
    let user = req.session.user._id
    let movie = {
        user,
        movieUrl
    }

    movieModel.find({user}).find({movieUrl}).then(data =>{
        console.log(data);
        if(data != ''){
            res.json({
                code:200,
                msg:'已经收藏过了'
            })  
        }else{
            movieModel.create(movie).then(data =>{
                res.json({
                    code:200,
                    msg:'收藏成功',
                    data
                });
            }).catch(err =>{
                res.json({
                    code:204,
                    msg:'缺少必要参数'
                });
            })
        }
    })
});

router.get('/iscollections', (req, res) => {
    let movieUrl = req.query.url
    let user = req.session.user._id
    let movie = {
        user,
        movieUrl
    }
    movieModel.find({user}).find({movieUrl}).then(data =>{
        console.log(data);
        if(data != ''){
            res.json({
                code:200,
                isCollect:true
            })
        }else{
            res.json({
                code:200,
                isCollect:false
            });
        }
    })
});

router.post('/cancelCollect', (req, res) => {
    let movieUrl = req.body.url
    let user = req.session.user._id
    let movie = {
        user,
        movieUrl
    }

    movieModel.find({user}).find({movieUrl}).then(data =>{
        movieModel.deleteOne({_id:data[0]._id}).then(deldata =>{
             res.json({
                 code:200,
                 msg:'取消收藏成功'
             });
        })
    })
})
module.exports = router;