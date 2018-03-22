import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClientService {

    private urlCountry = "/data/country.json";
    private url : String = "";
    

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post(this.url, data);
        
    }

    findAll() {
        return this.httpService.get(this.url);
    }


    // delete(id : Number) {
    //     return this.httpService.delete(this.url + "?" + id);
    // }

    
    // update(id : Number) {
    //     return this.httpService.update(this.url + "?" + id);
    // }

    //get country from json

    getCountry(){
        return this.httpService.get("/data/country.json");
    }
}
