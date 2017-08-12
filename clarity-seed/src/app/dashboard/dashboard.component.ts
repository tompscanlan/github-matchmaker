import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    //    styleUrls: ['./home.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    loadingRepos: boolean;
    repositories = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.loadingRepos = true;
        this.dataService.getRepositories().
            subscribe(res => {
                this.repositories = res.json();
                console.log(this.repositories);
                this.loadingRepos = false;
            }, (err) => {
                this.loadingRepos = false;
            });
    }
}
