import { expect } from "@playwright/test";

export class GeneralNavigationPage {
    constructor(page) {
        this.page = page;
        this.headerLogo = page.getByRole("banner").getByRole("link", { name: "conduit" });
        this.headerSourceCode = page.getByRole("banner").getByRole("link", { name: "Source code" });
        this.homeLink = page.getByRole("link", { name: "Home" });
        this.loginLink = page.getByRole("link", { name: "Login" });
        this.signUpLink = page.getByRole("link", { name: "Sign up" });
        this.footerLogo = page.getByRole("contentinfo").getByRole("link", { name: "conduit" });
        this.footerSourceCode = page.getByRole("contentinfo").getByRole("link", { name: "Source code" });
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