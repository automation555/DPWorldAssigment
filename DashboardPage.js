function dashboard()
{
	this.saleOrderEntityLink=element(by.xpath("//a[@href='./sales/sales_order_entry.php?NewOrder=Yes']"));
	
};

module.exports=new dashboard();