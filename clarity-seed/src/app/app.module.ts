import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { RepositoryComponent } from "./repository/repository.component";
import { DataService } from "./services/data.service";
import { SharedService } from "./services/shared.service";
import { ProfileComponent } from "./profile/profile.component";
import { PreferencesComponent } from "./preferences/preferences.component";
import { TagInputModule } from 'ngx-chips';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RepositoryComponent,
        ProfileComponent,
        PreferencesComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING,
        TagInputModule
    ],
    providers: [DataService, SharedService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
