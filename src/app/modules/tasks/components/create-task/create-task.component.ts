import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AbstractFormComponent } from 'projects/atoms/src/public-api';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent extends AbstractFormComponent implements OnInit {
    public componentForm = new FormGroup({
        label: new FormControl('', [Validators.required])
    });
    constructor() {
        super();
    }

    ngOnInit() {
    }

}
