import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/components/example/example.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';

const ROUTES: Routes = [
  // { path: 'persons', loadChildren: './persons/persons.module#PersonsModule' },
  // { path: 'colors', loadChildren: './colors/colors.module#ColorsModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'example', component: ExampleComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
