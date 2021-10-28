let homepage = require('../pages/homepage')



describe('Calculator test', function(){
    it('testing addition', function(){

       
       homepage.getUrl('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8');

        homepage.enterSecondNumber('5');

        homepage.clickGo();

        homepage.verifyResult('13');


        
    });

    it('testing subtraction', function(){

       
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
 
         homepage.enterFirstNumber('8');
 
         homepage.enterSecondNumber('5');
 
         homepage.clicknGo();
 
         homepage.verifyResult('13');
 
     
     });

   
 
});