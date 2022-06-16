import { ActivatedRoute } from "@angular/router";
import { BaseCtl } from "./base.component";
import { ServiceLocatorService } from "./service-locator.service";

export class BaseListCtl extends BaseCtl {
    //flag: boolean;
    constructor(public endpoint, public locator: ServiceLocatorService, public route: ActivatedRoute) {
        super(endpoint, locator, route);
    }

    ngOnInit() {
        this.preload();
        this.form.data.pageNo = 1;
        this.form.data.pageSize = 10;
        this.display();
    }

    display() {
        
        this.form.error=false;
        this.form.message=null;
        this.search();
    }

    submit() {
        
        this.form.error=false;
        this.form.message=null;
        this.form.data.pageNo = 1;
        this.search();
    }


    delete(id) {
        super.delete(id);


    }

    next() {
        this.form.error=false;
        this.form.message=null;
        this.form.data.pageNo++;
        console.log(this.form.data.pageNo + '----pageNo')
        this.display();
    }

    previous() {
        this.form.error=false;
        this.form.message=null;
        if (this.form.data.pageNo > 0) {
            this.form.data.pageNo--;
            this.display();
        }
    }
    reset() {
        //this.flag = false;
        
        this.form.searchParams = {};
        this.form.error=false;
        this.form.message=null;
        this.submit()
    }
    deleteAll(ids) {
        for (let i = 0; i < ids.length; i++) {
            this.delete(ids[i]);
        }
    }
    selectAll(){
        
    }
}