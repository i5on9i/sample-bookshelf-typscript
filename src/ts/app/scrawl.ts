
import axios, { AxiosResponse } from "axios";
import moment from "moment";
import { bookshelf } from "../lib/bookshelf";
import { Item } from "./model/item";



export class CrawlBg {
  constructor() {

  }
  

  async insertIntoDb() {
    // console.log(bmodel)
    
    const item = new Item()
    await item.set({
      org_id: 10,
    }).save();
    

  }

}
