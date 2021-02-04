function login()
{
	this.username=element(by.name("user_name_entry_field"));
	this.secondName=element(by.name("password"));
	this.goButton=element(by.name("SubmitUser"));
	
};

module.exports=new login();