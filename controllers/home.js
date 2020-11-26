const express 	= require('express');
const homeModel = require('../models/homeModel');
const adminModel = require.main.require('./models/adminModel');
const router 	= express.Router();
/*
router.get('*',  (req, res, next)=>{
	console.log("home");
	
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}



});
*/
router.get('/', (req, res)=>{
	adminModel.getAll(function(value){
		homeModel.getAllcart(function(results){
			total=results.length;
		res.render('home/index', {medicine: value,total});
		});
	});
	   
	

});

router.get('/feature', (req, res)=>{
	res.render('home/medicine');
});

router.get('/medicinecartadd/:id', (req, res)=>{
	id=req.params.id;
	adminModel.getById(id,function(results){

var medicinename=results[0].medicinename;


var price=results[0].price;
var cart={medicinename,price};
   
homeModel.insert(cart, function(status){
		
	if(status){
		
	
		homeModel.getAllcart(function(value){
			if(value.length>0){
			var total=value.length;
			adminModel.getAll(function(results){
				res.render('home/index', {medicine: results,total});
			});
		}   
			
		});
		
	}



});

		//res.render('home/index', {medicine: results});
	});
	   

	//res.render('home/medicine');
});
module.exports = router;