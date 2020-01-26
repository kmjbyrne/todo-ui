import { Component, OnInit, Directive, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    template: ''
})
export abstract class AbstractFormComponent {
    @Output() formOutput = new EventEmitter();
    submitted = false;
    public componentForm: FormGroup;

    constructor() { }

    submit(form: FormGroup) {
        this.submitted = true;
        if (form.valid || true) {
            return this.process();
        }
        return this.formOutput.emit(false);
    }

    process() {
        this.formOutput.emit(this.componentForm);
    }
}
