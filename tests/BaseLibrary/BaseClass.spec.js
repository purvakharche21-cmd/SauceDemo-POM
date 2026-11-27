import{ expect } from "@playwright/test";

export class BaseClass{
    constructor(page){
        this.page = page;
        this.expect = expect;

    }
   

    async launchbrowser(url){
        await this.page.goto(url);
    }

    async closebrowser(){
        await this.page.close();
    }
}