import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryComponent } from './repository/repository.component';
import { ProfileComponent } from './profile/profile.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'repository/:repo-id', component: RepositoryComponent },
    { path: 'profile', component: ProfileComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
