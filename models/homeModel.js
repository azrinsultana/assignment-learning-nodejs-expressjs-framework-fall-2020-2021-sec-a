const db = require('./db');

module.exports= {
	/*
	validate: function(user, callback){
		var sql = "select * from login where username='"+user.username+"' and password='"+user.password+"'";
		
		db.getResults(sql, function(results){
			if(results.length >0 ){
				console.log(results);
			
				 var result=results[0].role;
				 console.log(result);
				callback(results);
			}else{
				callback(false);
			}
		});
	},

	
	getById: function(username, callback){
		
var sql="select * from user where username='"+username+"'";
db.getResults(sql, function(results){
	if(results.length >0 ){
		
		callback(results);
		
	}else{
		console.log("not found");
	}
});

    },
    */
	
	getAll: function(callback){
		console.log("data");
		var sql = "select * from medicinetable";
		db.getResults(sql, function(results){
            console.log("all medicine");
            console.log(results);
			callback(results);
			
		});
	},
	
	getAllcart: function(callback){
		
		var sql = "select * from cart";
		db.getResults(sql, function(results){
		callback(results);
			
		});
	},
	

	insert: function(cart, callback){
	
		var sql = "INSERT INTO cart (medicinename,price) VALUES ('"+cart.medicinename+"','"+cart.price+"')";
	console.log(sql);
		db.execute(sql, function(status){
            
			callback(status);
		});
	},
	
	/*
	update:function(user, callback){
var sql="UPDATE user SET username='"+user.username+"',name='"+user.name+"',password='"+user.password+"',email='"+user.email+"',address='"+user.address+"' WHERE username='"+user.username+"' ";
console.log(sql);
db.execute(sql, function(status){
	callback(status);
});
	},

	delete: function(username, callback){
var sql="DELETE FROM user WHERE username='"+username+"'";	
console.log(sql);
		db.execute(sql, function(status){
			callback(status);
		});
    }
    */
	
}
