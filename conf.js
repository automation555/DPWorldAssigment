exports.config = {
//		directConnect: true,
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['TestCase1.js'],
  
  onPrepare:function()
  {
	  browser.driver.manage().window().maximize();
  }


};