import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'

test("testing the application",async({page})=>{
    const loginpage = new LoginPage(page) ;
    
    await loginpage.login();
    await loginpage.loginuser('admin');

})