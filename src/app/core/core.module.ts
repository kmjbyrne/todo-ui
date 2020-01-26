import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ProjectAtomsModule } from 'projects/atoms/src/public-api';
import { HttpClientModule } from '@angular/common/http';
// import { AtomsModule } from '@kbpc/atoms';


@NgModule({
    declarations: [CoreComponent],
    imports: [
        CommonModule,
        ProjectAtomsModule,
        // AtomsModule,
        HttpClientModule,
        CoreRoutingModule
    ],
})
export class CoreModule { }
