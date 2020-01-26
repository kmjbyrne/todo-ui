import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
    protected headerConfig = {
        center: [
            {
                label: 'Home',
                route: '',
                icon: 'home'
            },
            {
                label: 'Projects',
                route: 'projects',
                icon: 'tasks'
            }
        ],
        right: [
            {
                label: 'Logout',
                route: 'logout',
                icon: 'sign-out-alt'
            }
        ]
    };

    constructor() { }

    ngOnInit() {
    }

}
