const express 	= require('express');
//const userModel = require.main.require('./models/userModel');
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
	res.render('home/index');
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