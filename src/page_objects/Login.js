// Declare Selector Values on Page
const EMAIL_TXT_FIELD = '~input-email';
const PASSWORD_TXT_FIELD = '~input-password';
const LOGIN_BTN = '~button-LOGIN';
const SUCCESS_BTN='android.widget.Button';

class Login {

    get email_txt_field() {
        $(EMAIL_TXT_FIELD).waitForDisplayed({ timeout: 5000 });
        return $(EMAIL_TXT_FIELD);
    }

    get password_txt_field() {
        $(PASSWORD_TXT_FIELD).waitForDisplayed({ timeout: 5000 });
        return $(PASSWORD_TXT_FIELD);
    }

    get login_btn() {
        $(LOGIN_BTN).waitForDisplayed({ timeout: 5000 });
        return $(LOGIN_BTN);
    }

    get success_btn(){
        $(SUCCESS_BTN).waitForDisplayed({timeout: 5000});
        return $(SUCCESS_BTN);
    }

}
// Export an Instance not a class
export default new Login();