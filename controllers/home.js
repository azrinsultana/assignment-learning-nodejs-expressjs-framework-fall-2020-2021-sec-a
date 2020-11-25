const express 	= require('express');
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
	adminModel.getAll(function(results){
		res.render('home/index', {medicine: results});
	});
	   
	

});

router.get('/feature', (req, res)=>{
	res.render('home/medicine');
});
/*
router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});

})
*/

module.exports = router;