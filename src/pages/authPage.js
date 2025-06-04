import { test } from '@playwright/test';
import { REALWORLD_USER_CREDENTIALS } from "../helper/credentialsUser";

export class AuthPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole("link", { name: "Login" });
        this.signUpLink = page.getByRole("link", { name: "Sign up" });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.authModalLoginButton = page.getByRole('button', { name: 'Login' });
        this.userImg = page.locator("img[class='user-pic']");
    };

    async authorization() {
        return test.step("Авторизация пользователя", async () => {
            await this.loginLink.click();
            await this.emailInput.fill(REALWORLD_USER_CREDENTIALS.email);
            await this.passwordInput.fill(REALWORLD_USER_CREDENTIALS.password);
            await this.authModalLoginButton.click();
        });
    };
};