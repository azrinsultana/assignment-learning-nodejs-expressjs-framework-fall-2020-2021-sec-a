const express 	= require('express');
const userModel = require.main.require('./models/userModel');
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

router.get('/userlist', (req, res)=>{
    if(req.cookies['uname'] != null){
		userModel.getAll(function(results){
			res.render('user/userlist', {users: results});
		});
	}
	else{
		res.redirect('/login');
	}
	
});


router.get('/:username', (req, res)=>{
    if(req.cookies['uname'] != null){
        var username=req.params.username;
        console.log("In profile");
        console.log(username);
        userModel.getById(username, function(results){
	
	
            if(results.length>0){
                
    
                res.render('user/home',{user:results});
                
            
            }
        
        
            
        });
    
		
	
    }
    else{
        res.redirect('/login');
    }
    
	
});




router.get('/register', (req, res)=>{
	res.render('user/create');
});

router.post('/create', (req, res)=>{
	
	var user={
		
		username:req.body.username,
		name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        address:req.body.address

	};
	

	userModel.insert(user, function(status){
		
		if(status){
			
			res.render('home/index');
		}else{
			res.redirect('/login');
		}
    });

	userModel.loginsert(user);
});


router.get('/edit/:username', (req, res)=>{

	var username=req.params.username;

userModel.getById(username, function(results){
	
	
		if(results.length>0){
			

			res.render('user/edit',{user:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});


router.post('/edit/:username', (req, res)=>{
	var user={
		username:req.params.username,
		name:req.body.name,
		password:req.body.password,
		
		email:req.body.email,
		address:req.body.address
		
	

	};
	
	userModel.update(user, function(status){
		if(status){
            
            
            userModel.getAll(function(results){
                res.render('user/userlist', {users: results});
            });
		}else{
			res.render('user/edit');
		}
	});
	
});

router.get('/delete/:username', (req, res)=>{
	var username=req.params.username;
userModel.getById(username, function(results){
		if(results.length>0){
			console.log("delete user histore");
			console.log(results);
			
			res.render('user/delete',{user:results});
			
		}else{
			res.redirect('/home');
		}
	});


});
router.post('/delete/:username', (req, res)=>{
	var username=req.params.username;
	userModel.delete(username, function(status){
		
		if(status){
			userModel.getAll(function(results){
                res.render('user/userlist', {users: results});
            });
			
		}else{
			
			res.redirect('/home');
		}
	});

});

router.get('/profile/:username', (req, res)=>{

	var username=req.params.username;

userModel.getById(username, function(results){
	
	
		if(results.length>0){
			

			res.render('user/profile',{user:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});

router.get('/update/:username', (req, res)=>{

	var username=req.params.username;

userModel.getById(username, function(results){
	
	
		if(results.length>0){
			

			res.render('user/update',{user:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});

router.post('/update/:username', (req, res)=>{
	var user={
		username:req.params.username,
		name:req.body.name,
		password:req.body.password,
		
		email:req.body.email,
		address:req.body.address
		
	

    };
    console.log("user profile updated");
    console.log(user);
	
	userModel.update(user, function(status){
		if(status){
            
            username=req.params.username;
            userModel.getById(username, function(results){
	
	
                if(results.length>0){
                    
        
                    res.render('user/profile',{user:results});
                    
                
                }
            
            
            });

		}else{
			res.render('user/update');
		}
	});
	
});


router.get('/cartlist', (req, res)=>{
	console.log("cart list updated");

	res.render('user/cartlist');
/*
	homeModel.getAllcart(function(value){
		if(value.length>0){
		console.log("cart list updated");
			res.render('user/cartlist', {cart: value});
		
	}   
		
	});
	*/

});




module.exports = router;