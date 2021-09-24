import LoginPage from '../src/page_objects/Login';
const configdata= require('../config');

describe('Web Driver IO App Login Test',() => {
    before(function () {
        console.log("Application Test Starts")
    });

//    Specify for a test case
    it('Install WebDriverIO Application', function () {
        driver.installApp('D:\\TCSTraining\\AppiumPOM\\apk\\Android-NativeDemoApp-0.4.0.apk');
        console.log("Installation Of App Completed")
    });

    it('Run WebDriverIO App', function () {
        console.log("Launching App");
        driver.activateApp('com.wdiodemoapp');

    });

    it('Login to Appplication',()=>{
    //1. Click on Login Icon on Home Screen
    const LOGIN_ICON_HOME_SCREEN='~Login';
    $(LOGIN_ICON_HOME_SCREEN).click();
    //2. Login to Application
    LoginPage.email_txt_field.setValue(configdata.username);
    LoginPage.password_txt_field.setValue(configdata.password);
    LoginPage.login_btn.click();
    browser.pause(5000);
    LoginPage.success_btn.click();
    });

    it('Close WebDriverIO App', function () {
        console.log("Closing App");
        driver.terminateApp('com.wdiodemoapp');      
    });
    
    after(function () {
        console.log("Application Test End")
    })
});