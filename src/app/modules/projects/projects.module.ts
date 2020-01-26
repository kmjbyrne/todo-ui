import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ViewAllProjectsComponent } from './containers/view-all-projects/view-all-projects.component';


@NgModule({
  declarations: [ViewAllProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
