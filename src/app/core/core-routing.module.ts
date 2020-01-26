import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';


const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: '',
                // component: CoreComponent
                loadChildren: () => import('../modules/tasks/tasks.module').then(m => m.TasksModule)
            },
            {
                path: 'projects',
                loadChildren: () => import('../modules/projects/projects.module').then(m => m.ProjectsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    bootstrap: [CoreComponent]
})
export class CoreRoutingModule { }
