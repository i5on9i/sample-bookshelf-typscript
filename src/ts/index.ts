import {CrawlBg} from "./app/scrawl"


(async ()=>{
    const crawl = new CrawlBg();
    await crawl.insertIntoDb();
})()
