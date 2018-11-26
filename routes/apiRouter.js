
var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
var shoppingcartModel = require('../model/shoppingcart');



router.post('/register',(req,res,next)=>{
	console.log('post')
	console.log(req.body.username);
	userModel.create({
		username:req.body.username,
		password:req.body.password
	}).then((info)=>{
		console.log('save',info);
	})
})

router.get('/register',(req,res,next)=>{
	console.log('get')
	// console.log(req.date)
	// res.render('index', { title: 'register' });
})

router.post('/login',(req,res,next)=>{
	console.log('login post');
	console.log(req.body.username);
	userModel.find({
		username:req.body.username,
		password:req.body.password
	}).then((info)=>{
		console.log("info",info);
		req.session.userInfo = info[0];
		console.log('session',req.session.userInfo)
		res.send(info);
	})
	
})

router.get('/login',(req,res,next)=>{
	console.log('get login')
})


router.post('/getshoppingcart',(req,res,next)=>{
	console.log('get shoppingcart');
	console.log(req.session.userInfo.username);
	shoppingcartModel.find({username:req.session.userInfo.username},{username:1,img:1,price:1,name:1,number:1}).then((info)=>{
		console.log('info',info);
		res.send(info);
	})
})

router.get('/shoppingcart',(req,res,next)=>{
	console.log("detail")
	console.log(req.session.userInfo.username);
	//res.send(req);
	//res.send(req.session.userInfo.username)
})

/*router.get("/logname",(req,res,next)=>{
	console.log("getname",req);
	console.log(req.session.userInfo.username);
	res.send(req.session.userInfo.username)
})*/


router.post('/shoppingcart',(req,res,next)=>{
	console.log('post shoppingcart');
	//console.log(req.body);
	console.log('logname',req.session.userInfo.username);
	res.send(req.session.userInfo.username);
	if(req.session.userInfo !== null){
		console.log("not null");
		
		shoppingcartModel.create({
			username:req.session.userInfo.username,
			img:req.body.img,
			price:req.body.price,
			name:req.body.name,
			number:req.body.number
		}).then((info)=>{
			console.log(info);

		})
	} else {
		res.send("please login");
	}
	

})


module.exports = router;



