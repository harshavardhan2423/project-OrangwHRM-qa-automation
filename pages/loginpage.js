import { loginLocators } from "../locators/loginlocator";
import { ENV } from "../utils/env";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userinput = page.getByRole(loginLocators.username_lable.role, { name:loginLocators.username_lable.name});
        this.passwordinput = page.getByRole(loginLocators.password_label.role,{name:loginLocators.password_label.name});
        this.loginbuttoninput = page.getByRole(loginLocators.loginButton_label.role,{name:loginLocators.loginButton_label.name});
    }

    async login(){
        await this.page.goto(ENV.baseUrl)
    }

    async loginuser(role){
        const user = ENV.users[role]
        await this.userinput.fill(user.username);
        await this.passwordinput.fill(user.password);
        await this.loginbuttoninput.click();

    }
}