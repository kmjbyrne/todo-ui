import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';

@Component({
    selector: 'app-view-all',
    templateUrl: './view-all.component.html',
    styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
    protected todoList = [{
        label: 'test'
    }];
    constructor(private service: TaskService) { }

    ngOnInit() {
        this.service.get().subscribe((resp: any) => {
            this.todoList = resp.data;
            console.log(resp);
            console.log(this.todoList);
        });
    }

    handleSubmit(event) {
        console.log(event.value);
    }

}
