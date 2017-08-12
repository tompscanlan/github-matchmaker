import { Http, Headers, ResponseContentType, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedService {

    public favoriteRepos = [];

    constructor() {
    }
}
