import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
