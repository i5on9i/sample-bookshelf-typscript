import { bookshelf } from "../../lib/bookshelf"

export class Item extends bookshelf.Model<Item> {
    get tableName() { return 'item'; }
    get hasTimestamps() { return true; }
    // orders() {
    //     return this.hasMany('Order')
    // }

    public get Id(): number {return this.get('id');}
    public set Id(value: number) {this.set({id: value})}
    public get OrgId(): number {return this.get('org_id');}
    public set OrgId(value: number) {this.set({org_id: value});}

}

bookshelf.model('Item', new Item())


