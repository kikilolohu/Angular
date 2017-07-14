import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'man-vision',
    templateUrl: 'man.vision.component.html'
})

export class ManVisionComponent implements OnInit {

    ngOnInit(): void {
        //Load all data
    }
    constructor(private router: Router) { };

    GoToLogin = function () {
        this.router.navigate(['/login']);
    }
}