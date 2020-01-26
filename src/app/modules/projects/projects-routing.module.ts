import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllProjectsComponent } from './containers/view-all-projects/view-all-projects.component';


const routes: Routes = [{
    path: '',
    component: ViewAllProjectsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
