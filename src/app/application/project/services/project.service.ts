import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";

@Injectable()
export class ProjectService {

    private url : String = "data/project.json";
    private clientUrl : string = "data/clientlist.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post(this.url, data);
    }

    findAll() {
        return this.httpService.get("data/clientlist.json");
    }

    findById(id : Number) {
        return this.httpService.get(this.url + "?" + id);
    }

    
}
