function saleOrderEntity()
{
	this.customerDropdown=element(by.tagName("select#customer_id"));
	this.customerDrodpdownValueToSelect=element(by.css("#customer_id [value='208']"));
	this.itmeCode=element(by.id("_stock_id_edit"));
	this.itemDescription=element(by.tagName("select#stock_id"));
	this.itemDrodpdownValueToSelect=element(by.css("#stock_id [value='002020416']"));
	this.qty=element(by.name('qty'));
	this.shippingCharge=element(by.name("freight_cost"));
	this.updateBtn=element(by.id("update"));
	this.amountvalue=element(by.xpath("//*[@id='items_table']/center/table/tbody/tr[6]/td[2]"));
	
	
	
};

module.exports=new saleOrderEntity();