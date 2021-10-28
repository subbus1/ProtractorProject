let homepage = function(){

    let firstNum_input = element(by.model('first'));
    let secondNum_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNum_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondtNo){
        secondNum_input.sendKeys(secondtNo);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){

        let outPut = element(by.cssContainingText('.ng-binding', result))
        expect(outPut.getText()).toEqual(result);

    };
};

module.exports = new homepage();