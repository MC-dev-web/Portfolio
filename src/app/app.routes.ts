import { Routes } from '@angular/router';
import { App } from './app';
import { Homepage } from './homepage/homepage';
import { Projects } from './projects/projects';
import { Certificates } from './certificates/certificates';
import { Contact } from './contact/contact';
import { ErrorPage } from './error-page/error-page';
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
