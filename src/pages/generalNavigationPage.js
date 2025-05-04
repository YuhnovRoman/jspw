import { expect } from "@playwright/test";

export class GeneralNavigationPage {
    constructor(page) {
        this.page = page;
        this.headerWrapper = page.locator("nav");
        this.footerWrapper = page.locator("footer");
        this.headerLogo = this.headerWrapper.getByRole("link", { name: "conduit" });
        this.headerSourceCode = this.headerWrapper.getByRole("link", { name: "Source code" });
        this.homeLink = this.headerWrapper.getByRole("link", { name: "Home" });
        this.loginLink = this.headerWrapper.getByRole("link", { name: "Login" });
        this.signUpLink = this.headerWrapper.getByRole("link", { name: "Sign up" });
        this.footerLogo = this.footerWrapper.getByRole("link", { name: "conduit" });
        this.footerSourceCode = this.footerWrapper.getByRole("link", { name: "Source code" });
        this.paginationWrapper = page.getByRole("navigation", { name: "Pagination" });
    }

    async checkHeader() {
        await expect(this.headerLogo).toBeVisible();
        await expect(this.headerSourceCode).toBeVisible();
        await expect(this.homeLink).toBeVisible();
        await expect(this.loginLink).toBeVisible();
        await expect(this.signUpLink).toBeVisible();
    };

    async checkFooter() {
        await expect(this.footerLogo).toBeVisible();
        await expect(this.footerSourceCode).toBeVisible();
    };

    async checkPagination() {
        await expect(this.paginationWrapper).toBeVisible();
    }
}