import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { ButtonComponent } from './components/button/button.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopbarTitleComponent } from './components/topbar-title/topbar-title.component';
import { TopbarMenuComponent } from './components/topbar-menu/topbar-menu.component';
import { TopbarUserInfoComponent } from './components/topbar-user-info/topbar-user-info.component';
import { ExampleComponent } from './components/example/example.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    PanelComponent,
    ButtonComponent,
    TopbarComponent,
    TopbarTitleComponent,
    TopbarMenuComponent,
    TopbarUserInfoComponent,
    ExampleComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    CommonModule,
    PanelComponent,
    ButtonComponent,
    TopbarComponent,
    TopbarTitleComponent,
    TopbarMenuComponent,
    TopbarUserInfoComponent,
    ExampleComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
