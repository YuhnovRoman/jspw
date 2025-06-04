export class GeneralNavigationPage {
    constructor(page) {
        this.page = page;
        this.headerWrapper = page.locator("nav");
        this.footerWrapper = page.locator("footer");
        this.headerLogo = this.headerWrapper.getByRole("link", { name: "conduit" });
        this.headerSourceCode = this.headerWrapper.getByRole("link", { name: "Source code" });
        this.homeLink = this.headerWrapper.getByRole("link", { name: "Home" });
        this.footerLogo = this.footerWrapper.getByRole("link", { name: "conduit" });
        this.footerSourceCode = this.footerWrapper.getByRole("link", { name: "Source code" });
        this.paginationWrapper = page.getByRole("navigation", { name: "Pagination" });
    };
};