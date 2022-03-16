import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { HtmlProjectsComponent } from 'app/html-projects/html-projects.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HtmlProjectsComponent
  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule], 
  exports: [SidenavComponent]
})
export class SharedModule {}
