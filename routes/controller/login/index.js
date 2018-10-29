var express = require('express');
var router = express.Router();
var adminModel = require('../../../dataBase/model/admin')
var movieModel = require('../../../dataBase/model/movie')

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

router.get('/collectins', (req, res) => {
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

router.post('/collectins', (req, res) => {
    let movieUrl = req.body.url
    let user = req.session.user._id
    let movie = {
        user,
        movieUrl
    }

    movieModel.findOne({user}).then(data =>{
        if(data && data.movieUrl == movieUrl){
            res.json({
                code:200,
                msg:'已经收藏过了'
            });
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


module.exports = router;