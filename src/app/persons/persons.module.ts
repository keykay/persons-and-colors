import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path: '/', component: PersonListComponent },
  { path: '/:id', component: PersonDetailsComponent }
];

@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PersonsModule { }
