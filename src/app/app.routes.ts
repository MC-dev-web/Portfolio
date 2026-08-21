import { Routes } from '@angular/router';
import { App } from './app';
import { Homepage } from './homepage/homepage';
import { Projects } from './projects/projects';
import { Certificates } from './certificates/certificates';
import { Contact } from './contact/contact';
import { ErrorPage } from './error-page/error-page';
import { My25cents } from './my25cents/my25cents';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        component: Homepage,
        title: 'Homepage'
        },
    {
        path: 'projects',
        component: Projects,
        title: 'Projects'
    },
    {
        path: 'certificates',
        component: Certificates,
        title: 'Certificates'
    },
    {
        path:'my25cents',
        component: My25cents,
        title: 'My 25 Cents'
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Contact Me'
    },
    {
        path: '**',
        component: ErrorPage,
        title: 'Error Page'
    }

];
