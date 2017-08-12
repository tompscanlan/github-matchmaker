import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    //    styleUrls: ['./home.component.scss'],
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

    loadingUserIssues: boolean;
    repositories = [];

    userLanguage = "Java"; // FIXME
    userIssues = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getRepositories().
            subscribe(res => {
                this.repositories = res.json();

            }, (err) => {

            });

        // get languages and select
        this.loadingUserIssues = true;
        this.dataService.getIssuesForLanguage(this.userLanguage).
            subscribe(res => {
                this.userIssues = res.json()['items'];
                console.log(this.userIssues);
                this.loadingUserIssues = false;
            }, (err) => {
                this.loadingUserIssues = false;
            });
    }
}
