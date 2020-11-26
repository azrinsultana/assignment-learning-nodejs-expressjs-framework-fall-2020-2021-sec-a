const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const adminModel = require.main.require('./models/adminModel');
const homeModel = require.main.require('./models/homeModel');
const router 	= express.Router();


router.get('/create', (req, res)=>{
		res.render('user/create');
   });
   

   router.get('/medicineview/:id', (req, res)=>{

	var id=req.params.id;
	console.log("admin");

adminModel.getById(id, function(results){
	
	
		if(results.length>0){
			

			res.render('admin/medicineview',{medicine:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});

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
       
        adminModel.getAll(function(results){
            res.render('admin/home', {medicine: results});
        });
         
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
            adminModel.getAll(function(results){
                res.render('admin/home', {medicine: results});
            });
			
		}else{
			res.redirect('/login');
		}
    });


});


router.get('/medicineedit/:id', (req, res)=>{

	var id=req.params.id;
	console.log("admin");

adminModel.getById(id, function(results){
	
	
		if(results.length>0){
			

			res.render('admin/medicineedit',{medicine:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});


router.post('/medicineedit/:id', (req, res)=>{
	var id=req.params.id;
		var medicine={
		id,
			medicinename:req.body.medicinename,
			genre:req.body.genre,
			medicinetype:req.body.medicinetype,
			vendorname:req.body.vendorname,
			price:req.body.price,
			quantity:req.body.quantity
	
	
		};
		
		
	


	
	adminModel.update(medicine, function(status){
		if(status){
            
            
            adminModel.getAll(function(results){
				res.render('admin/medicinelist', {medicine: results});
				console.log("in");
            });
		}else{
			res.render('user/edit');
		}
	});
	
});

router.get('/medicinedelete/:id', (req, res)=>{

	var id=req.params.id;
	console.log("admin");

adminModel.getById(id, function(results){
	
	
		if(results.length>0){
			

			res.render('admin/medicinedelete',{medicine:results});
			
		
		}
	
		else{
			res.redirect('/login');
		}
		
	});


});
router.post('/medicinedelet/:id', (req, res)=>{
	var id=req.params.id;
		var medicine={
		id,
			medicinename:req.body.medicinename,
			genre:req.body.genre,
			medicinetype:req.body.medicinetype,
			vendorname:req.body.vendorname,
			price:req.body.price,
			quantity:req.body.quantity
	
	
		};
		
		
	


	
	adminModel.delete(medicine, function(status){
		if(status){
            
            
            adminModel.getAll(function(results){
				res.render('admin/medicinelist', {medicine: results});
				console.log("in");
            });
		}else{
			res.render('user/edit');
		}
	});
	
});




router.post('/search', (req, res)=>{
	var keyword=req.body.keyword;

	console.log(keyword);
	adminModel.getsearch(keyword,function(results){
		console.log(results);
		res.json(results);


	});
  //  res.render('blog/bloglist');
});


router.get('/cartlist', (req, res)=>{
	
var username=req.session.username;
	//res.render('user/cartlist');

	homeModel.getAllcart(function(value){
		if(value.length>0){
	userModel.getById(username,function(results){
		if(results.length>0){
		res.render('user/cartlist', {cart: value,user:results});
	}
		


	});
			
	}   
		
	});
	

});

router.get('/cartdelete/:id',(req, res)=>{
	var id=req.params.id;
	var username=req.session.username;

	
	homeModel.delete(id,function(status){
		if(status){

			userModel.getById(username,function(results){
				if(results.length>0){
					console.log("user detauk");
					console.log(results);
					//res.render('user/cartlist',{user:results});


					homeModel.getAllcart(function(tvalue){
						if(tvalue.length>0){
						var total=tvalue.length;
					
					
						res.render('user/cartlist', {cart: tvalue,user:results,total});
						}
					});
					

				
			}
				
		
		
			});
	        //	console.log("cart list updated");
	//	res.render('user/cartlist', {cart: value});

		
	}   
		
	});
	

});

module.exports = router;





