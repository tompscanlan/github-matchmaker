import { Http, Headers, ResponseContentType, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedService {

    public favoriteRepos = [];

    public query = {};

    constructor() {
        // set some initial values - higly likely to be selected
       this.query['type'] = 'issue';
       this.query['state'] = 'open';
    }
}
