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

	*/
	getById: function(id, callback){
		
var sql="select * from medicinetable where id='"+id+"'";
db.getResults(sql, function(results){
	if(results.length >0 ){
		
		callback(results);
		
	}else{
		console.log("not found");
	}
});

    },
    
	
	getAll: function(callback){
		console.log("data");
		var sql = "select * from medicinetable";
		db.getResults(sql, function(results){
            console.log("all medicine");
            console.log(results);
			callback(results);
			
		});
	},
	
	getAllaspirin: function(callback){
		console.log("data");
		var sql = "select * from medicinetable where genre='aspirin'";
		db.getResults(sql, function(results){
            console.log("all medicine");
            console.log(results);
			callback(results);
			
		});
	},
	
	
	insert: function(medicine, callback){
	
		var sql = "INSERT INTO medicinetable (medicinename,genre,medicinetype,vendorname,price,quantity) VALUES ('"+medicine.medicinename+"', '"+medicine.genre+"','"+medicine.medicinetype+"','"+medicine.vendorname+"','"+medicine.price+"','"+medicine.quantity+"')";
	console.log(sql);
		db.execute(sql, function(status){
            
			callback(status);
		});
	},
	
	
	update:function(medicine, callback){
var sql="UPDATE medicinetable SET id='"+medicine.id+"',medicinename='"+medicine.medicinename+"',genre='"+medicine.genre+"',medicinetype='"+medicine.medicinetype+"',vendorname='"+medicine.vendorname+"',price='"+medicine.price+"',quantity='"+medicine.quantity+"' WHERE id='"+medicine.id+"' ";
console.log(sql);
db.execute(sql, function(status){
	callback(status);
});
	},

	delete: function(id, callback){
var sql="DELETE FROM medicinetable WHERE id='"+id+"'";	
console.log(sql);
		db.execute(sql, function(status){
			callback(status);
		});
    },
    

	getsearch:function(keyword,callback){
		var sql='select * from medicinetable where medicinename like "%'+keyword+'%"' ;
		console.log(sql);
		db.getResults(sql, function(results){
			
				console.log(results);
				callback(results);
				
				
			
		});
			},	
}
