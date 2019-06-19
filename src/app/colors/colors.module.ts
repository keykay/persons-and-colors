import { NgModule } from '@angular/core';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorDetailsComponent } from './components/color-details/color-details.component';
import { SharedModule } from '../shared/shared.module';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '/', component: ColorListComponent },
  { path: '/:id', component: ColorDetailsComponent }
];

@NgModule({
  declarations: [
    ColorListComponent,
    ColorDetailsComponent],
  imports: [
    SharedModule
  ]
})
export class ColorsModule { }
