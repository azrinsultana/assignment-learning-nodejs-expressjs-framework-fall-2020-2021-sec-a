const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const adminModel = require.main.require('./models/adminModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	console.log("home");
	
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}



});


router.get('/', (req, res)=>{
	if(req.cookies['uname'] != null){
		res.render('admin/home');
	}else{
		res.render('home/index');
	}

});

router.get('/medicinecreate', (req, res)=>{
	res.render('admin/mcreate');
});

router.post('/medicinecreate', (req, res)=>{
	
	var medicine={
		
		medicinename:req.body.medicinename,
		genre:req.body.genre,
        medicinetype:req.body.medicinetype,
        vendorname:req.body.vendorname,
        price:req.body.price,
        quantity:req.body.quantity


	};
	
console.log("admin");
console.log(medicine);
	adminModel.insert(medicine, function(status){
		
		if(status){
			
			res.render('admin/home');
		}else{
			res.redirect('/login');
		}
    });


});

module.exports = router;





