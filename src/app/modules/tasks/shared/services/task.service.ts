import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { CoreHttpResourceService } from '../../../../shared/services/core-http.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService extends CoreHttpResourceService<Task> {

    constructor(http: HttpClient) {
        super(http, environment.api, 'task');
    }
}
