import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { RepositoryComponent } from './repository/repository.component';
import { ProfileComponent } from './profile/profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'preferences', component: PreferencesComponent },
    { path: 'repository/:repo-id', component: RepositoryComponent },
    { path: 'profile', component: ProfileComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
