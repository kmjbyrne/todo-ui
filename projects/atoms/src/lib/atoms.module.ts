import { NgModule } from '@angular/core';
import { AtomsComponent } from './atoms.component';
import { HeaderModule } from './header/header.module';
import { DirectivesModule } from './directives/directives.module';
import { FormsModule } from '@angular/forms';
import { AtomPanelModule } from './panel/atom-panel.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { AtomLoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { AtomsFormsElementModule } from './form-element/form.module';
import { AbstractFormComponent } from './core/form-base/form-base.component';


@NgModule({
    declarations: [
        AtomsComponent
    ],
    providers: [],
    imports: [
        HeaderModule,
        DirectivesModule,
        FormsModule,
        AtomPanelModule,
        TodoListModule,
        AtomLoadingSpinnerModule,
        AtomsFormsElementModule,
    ],
    exports: [
        HeaderModule,
        DirectivesModule,
        FormsModule,
        AtomPanelModule,
        TodoListModule,
        AtomLoadingSpinnerModule,
        AtomsFormsElementModule
    ]
})
export class ProjectAtomsModule { }
