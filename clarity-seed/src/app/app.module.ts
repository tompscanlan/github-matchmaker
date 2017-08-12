import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RepositoryComponent } from "./repository/repository.component";
import { DataService } from "./services/data.service";
import { SharedService } from "./services/shared.service";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        DashboardComponent,
        RepositoryComponent,
        ProfileComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [DataService, SharedService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
