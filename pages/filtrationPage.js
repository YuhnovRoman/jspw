export class TagsFiltration {
    constructor(page) {
        this.page = page;
        this.tag = page.locator('[class="tag-pill tag-default"]');
        this.tagTab = getByRole('button', { name: 'реклама' }).first();
        this.article = getByRole('link', { name: 'In Search of Lost' });
        this.articleTag  = getByRole('listitem', { name: 'реклама'})
    }
}