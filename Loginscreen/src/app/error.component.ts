import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'error',
    template: `
              <div style="text-align:center;">
                <h1>404</h1>
              </div>
                <button md-fab (click)="GoBack()">
                Go Back
                </button>
              
              `
})

export class PageNotFoundComponent implements OnInit {

    ngOnInit(): void {
        //Load all data
    }
    constructor(private location: Location){}
    GoBack=function() {
        this.location.back()
    }
}