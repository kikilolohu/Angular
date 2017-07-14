import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'emp-vision',
    templateUrl: 'emp.vision.component.html'
})

export class EmpVisionComponent implements OnInit {

    ngOnInit(): void {
        //Load all data
    }
    constructor(private router: Router) { };

    GoToLogin = function () {
        this.router.navigate(['/login']);
    }
}