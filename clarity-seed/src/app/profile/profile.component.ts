import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { SharedService } from "../services/shared.service";

@Component({
    styleUrls: [
        './search-theme.scss'
    ],
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

    loadingUserIssues: boolean;
    repositories = [];
    terms = [];
    //maxSuggestions: number = 10;
    //suggestions = ["Java", "JavaScript"]; // not working with the tag-input for some reason

    userIssues = [];

    constructor(private dataService: DataService,
                private sharedService: SharedService) { }

    ngOnInit(): void {
        this.dataService.getRepositories().
            subscribe(res => {
                this.repositories = res.json();
            }, (err) => {
                console.log(err);
               // TODO: handle me
            });

        if (!this.sharedService.query) { return; } // no user preferences - ask for selection
        this.loadingUserIssues = true;
        let queryStr = this.dataService.buildQuery(this.sharedService.query);
        this.dataService.getIssuesWithQuery(queryStr).
            subscribe(res => {
                this.userIssues = res.json()['items'];
                // console.log(this.userIssues);
                this.loadingUserIssues = false;
            }, (err) => {
                console.log(err);
                this.loadingUserIssues = false;
            });
    }

    public onCriteriaChange(): void {
        console.log(this.terms);
    }
}
