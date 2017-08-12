import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { SharedService } from "../services/shared.service";
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    styleUrls: ['./repository.component.scss'],
    templateUrl: './repository.component.html',
})
export class RepositoryComponent implements OnInit {

    loadingRepo: boolean;
    loadingIssues: boolean;
    repo: any;
    issues = [];
    avatarUrl: string;

    constructor(private dataService: DataService,
        private sharedService: SharedService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(() => {
            this.route.params
                .switchMap((params: Params) => this.dataService.getRepo(params['repo-id']))
                .subscribe(repo => {
                    this.repo = repo.json();
                    // console.log(this.repo.json());
                    //this.issuesUrl = this.repo['issues_url'];
                    //this.language = this.repo['language'];
                    this.loadingIssues = true;
                    this.dataService.getIssues(this.repo['issues_url']).subscribe((res) => {
                        this.issues = res.json();
                        this.loadingIssues = false;
                        console.log(this.issues);
                    }, (err) => {
                        this.loadingIssues = false;
                    });
                    this.avatarUrl = this.repo['owner']['avatar_url'];
                });
        });
    }

    isFavorite(): boolean {
       return true;
       // return this.sharedService.favoriteRepos.filter(r => {return r.id === this.repo.id}).length > 0;
    }

    addToFavorites(): void {
        this.sharedService.favoriteRepos.push(this.repo);
    }

    removeFromFavorites(): void {
       //
    }
}
