const express 		= require('express');
const mysql 	= require('mysql');
const userModel		= require.main.require('./models/userModel');
const adminModel = require.main.require('./models/adminModel');
const router 		= express.Router();



router.get('/login', (req, res)=>{
	//res.render(ho/index);
	res.render('login/index');
});

router.post('/login', (req, res)=>{

	var user = {

		username: req.body.username,
		password: req.body.password
	};

	

	userModel.validate(user, function(results){
		if((results[0].username=="admin")&& (results[0].password==req.body.password)&& (results[0].role==0)){
			{ 
            res.cookie('uname', req.body.username);
            
			adminModel.getAll(function(results){
				res.render('admin/home', {medicine: results});
			});
               
			}
		


			//res.render('user/userlist');
		}else if ((results[0].username==req.body.username)&& (results[0].password==req.body.password) && (results[0].role==1)) {
			console.log(results[0].username);
			console.log(results[0].role);
			
			console.log(results[0].password);
            res.cookie('uname', req.body.username);
			res.render('user/home', {user: results});
			
		}
		else{
			res.redirect('/login');
		}
    });
    
	
}); 








module.exports = router;