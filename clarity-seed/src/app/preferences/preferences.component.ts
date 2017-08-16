import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../services/data.service";
import { SharedService } from "../services/shared.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './preferences.component.html',
})
export class PreferencesComponent implements OnInit, OnDestroy {
    public query: any;

    issueTypes = [
        { 'type': 'Issues', 'value': 'issue' },
        { 'type': 'Pull Requests', 'value': 'pr' }
    ];
    states = [
        { 'type': 'Open', 'value': 'open' },
        { 'type': 'Closed', 'value': 'closed' }
    ];
    scopes = [
        { 'type': 'Title', 'value': 'title' },
        { 'type': 'Title and body', 'value': 'body' },
        { 'type': 'Comments', 'value': 'comments' }
    ];

    reactionTypes = [
        { 'type': 'Most reactions', 'value': 'reactions' },
        { 'type': 'Fewest reactions', 'value': 'reactions-asc' }, // from fewest to the most
        { 'type': 'Most +1s', 'value': 'reactions-+1' },
        { 'type': 'Most -1s', 'value': 'reactions--1' },
        { 'type': 'Most laughs', 'value': 'reactions-smile' },
        { 'type': 'Most hurrays', 'value': 'reactions-tada' },
        { 'type': 'Most hearts', 'value': 'reactions-heart' },
    ];

    constructor(private dataService: DataService,
        private sharedService: SharedService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        // now linked with the running language service
        this.dataService.getIssueFromService("java").subscribe(res => { console.log(res['_body']); });
        this.query = this.sharedService.query;
    }

    ngOnDestroy(): void {
        // save whatever is populated
        this.sharedService.query = this.query;
    }

    search() {
        // TODO: match all or match any?
        this.sharedService.query = this.query;
        this.router.navigate(['/profile']);
    }
}
