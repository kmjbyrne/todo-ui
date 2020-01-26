import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ViewAllComponent } from './containers/view-all/view-all.component';
import { ProjectAtomsModule } from 'projects/atoms/src/public-api';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [ViewAllComponent, CreateTaskComponent],
    imports: [
        CommonModule,
        FormsModule,
        // HttpClientModule,
        ReactiveFormsModule,
        TasksRoutingModule,
        ProjectAtomsModule
    ],
    // providers: [HttpClientModule]
})
export class TasksModule { }
