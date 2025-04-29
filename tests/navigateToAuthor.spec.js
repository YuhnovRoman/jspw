import test from "@playwright/test";
import { AuthorPage } from "../pages/authorPage";

test("Navigate to author", async ({ page }) => {
    const authorPage = new AuthorPage(page);

    await authorPage.checkNavigateToAuthor();
});