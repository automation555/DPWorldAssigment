var login = require('../DpWorldAssignment/loginPage.js')
var dashboard = require('../DpWorldAssignment/DashboardPage.js')
var saleOrderEntity = require('../DpWorldAssignment/SaleOrderEntityPage.js')
describe('Login to application', function() {

	it('Navigating to browser', function() {
		browser.ignoreSynchronization = true;
		browser.get('http://demo.frontaccounting.eu/');

	});

	it('Entering username and password', function() {

		login.goButton.click().then(function() {

		});

	});

	it('Click on sale order entity', function() {

		dashboard.saleOrderEntityLink.click().then(function() {

		});

	});

	it('Enter values and select dropdown options', function() {
		saleOrderEntity.customerDropdown.click();
		saleOrderEntity.customerDrodpdownValueToSelect.click();
		saleOrderEntity.itemDescription.click();
		saleOrderEntity.itemDrodpdownValueToSelect.click();
		saleOrderEntity.qty.sendKeys("2");
		saleOrderEntity.shippingCharge.clear();
		saleOrderEntity.shippingCharge.sendKeys("100");
		saleOrderEntity.updateBtn.click().then(function() {


		}

		);

	});

});
