const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const adminModel = require.main.require('./models/adminModel');
const homeModel = require.main.require('./models/homeModel');
const router 	= express.Router();
router.get('/create', (req, res)=>{
	res.render('user/create');
});
router.get('*',  (req, res, next)=>{
	console.log("home");
	
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}



});



router.get('/purchase',(req, res)=>{
	
	var username=req.session.username;

	
	

			userModel.getById(username,function(results){
				if(results.length>0){
				
					//res.render('user/cartlist',{user:results});


					homeModel.getAllcart(function(tvalue){
						if(tvalue.length>0){
						var total=tvalue.length;
					
					
						res.render('user/address', {cart: tvalue,user:results,total});
						}
					});
					

				
			}
				
		
		
			});
});





router.get('/address',(req, res)=>{
	
	var username=req.session.username;

	
	

			userModel.getById(username,function(results){
				if(results.length>0){
				
					//res.render('user/cartlist',{user:results});


					homeModel.getAllcart(function(tvalue){
						if(tvalue.length>0){
						var total=tvalue.length;
					
					
						res.render('user/product', {cart: tvalue,user:results,total});
						}
					});
					

				
			}
				
		
		
			});
});




router.post('/address',(req, res)=>{
	
	var username=req.session.username;

	
	

			userModel.getById(username,function(results){
				if(results.length>0){
				
					//res.render('user/cartlist',{user:results});


					homeModel.getAllcart(function(tvalue){
						if(tvalue.length>0){
						var total=tvalue.length;
					
					
						res.render('user/product', {cart: tvalue,user:results,total});
						}
					});
					

				
			}
				
		
		
			});
});


module.exports = router;